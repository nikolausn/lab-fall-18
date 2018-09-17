import requests
import urllib
from bs4 import BeautifulSoup as bs
import sqlite3
import json
import time
import xmltodict

db = sqlite3.connect("arxiv.db")
sql = ''' INSERT INTO arxiv_api_table(id,title,authors,abstract,subjects,pub_date,update_date,class)
           VALUES(?,?,?,?,?,?,?,?) '''
cur = db.cursor()
# host = "https://arxiv.org"

# print(json.dumps(my_object))
# get the entry lists
subjects_list = ['cs.CE',
                 'cs.CG',
                 'cs.CL',
                 'cs.CR',
                 'cs.CV',
                 'cs.CY',
                 'cs.DB',
                 'cs.DC',
                 'cs.DL',
                 'cs.DM',
                 'cs.DS',
                 'cs.ET',
                 'cs.FL',
                 'cs.GL',
                 'cs.GR',
                 'cs.GT',
                 'cs.HC',
                 'cs.IR',
                 'cs.IT',
                 'cs.LG',
                 'cs.LO',
                 'cs.MA',
                 'cs.MM',
                 'cs.MS',
                 'cs.NA',
                 'cs.NE',
                 'cs.NI',
                 'cs.OH',
                 'cs.OS',
                 'cs.PF',
                 'cs.PL',
                 'cs.RO',
                 'cs.SC',
                 'cs.SD',
                 'cs.SE',
                 'cs.SI',
                 'cs.SY']

iteration = 10
request = 1000
start = 0
for arxiv_class in subjects_list:
    for i in range(iteration):
        start = i * request
        export_url = "http://export.arxiv.org/api/query?search_query=cat:" + arxiv_class + "&start=" + str(
            start) + "&max_results=" + str(request) + "&sortBy=submittedDate&sortOrder=descending"
        print(export_url)
        # the seed
        # arxiv_class="cs.AI"
        # arxiv_seed="https://arxiv.org/abs/1808.04444"
        r = requests.get(export_url)
        time.sleep(3)
        my_object = xmltodict.parse(r.text)
        try:
            entries = my_object["feed"]["entry"]
        except BaseException as ex:
            print("error at export url:",export_url)
            #time.sleep(3)
            continue
        for entry in entries:
            object = {}
            abs_url = entry["id"]
            object["abs_url"] = abs_url
            #print(abs_url)
            id = abs_url.split("/")[-1]
            object["id"] = id
            from datetime import datetime

            published_date = datetime.strptime(entry["published"], "%Y-%m-%dT%H:%M:%SZ")
            object["published_date"] = published_date
            updated_date = datetime.strptime(entry["updated"], "%Y-%m-%dT%H:%M:%SZ")
            object["updated_date"] = updated_date
            title = entry["title"]
            object["title"] = title
            summary = entry["summary"]
            object["summary"] = summary
            if type(entry["author"]) == list:
                authors = [x["name"] for x in entry["author"]]
            else:
                authors = [entry["author"]["name"]]
            object["authors"] = authors
            if type(entry["category"]) == list:
                subjects = [x["@term"] for x in list(entry["category"])]
            else:
                subjects = [entry["category"]["@term"]]
            object["subjects"] = subjects
            #print(object)
            try:
                """
                sql = ''' INSERT INTO arxiv_api_table(id,title,authors,abstract,subjects,pub_date,update_date,class)
                   VALUES(?,?,?,?,?,?,?,?) '''
                """
                cur.execute(sql, (
                id, title, json.dumps(authors), summary, json.dumps(subjects), published_date, updated_date, arxiv_class))
                db.commit()
            except BaseException as ex:
                # the ID is already there in database, break it first
                print(ex)
                # break;

"""
soup = bs(r.text,features="html.parser")

counter = 0
maximum_scrap = 1000

for i in range(maximum_scrap):
    # id
    # <meta name="citation_arxiv_id" content="1808.07017" />
    id = soup.find("meta",attrs={"name":"citation_arxiv_id"})
    id = id.get_attribute_list("content")[0]


    # title
    title = soup.find("h1",attrs={"class":"title mathjax"})
    title = title.find("span").next_sibling.replace("\n","")
    print("title: ",title)

    # submission date
    # div class="dateline"
    date = soup.find("div", attrs={"class": "dateline"})
    date = date.text
    date = date.replace("(Submitted on ","")[:11]
    print("date: ",date)

    # authors

    # <div class="authors"
    authors = soup.find("div", attrs={"class": "authors"})
    #print(authors)
    authors = authors.findAll("a")
    #print(authors.text)
    authors = [x.text for x in authors]
    authors = json.dumps(authors)
    print("authors: ",authors)

    # abstract
    # <blockquote class="abstract mathjax"
    abstract = soup.find("blockquote",attrs={"class":"abstract mathjax"})
    abstract = abstract.find("span").next_sibling.strip()
    print("abstract: ",abstract)

    # subjects
    # <td class="tablecell subjects">
    subjects = soup.find("td",attrs={"class":"tablecell subjects"})
    subjects = subjects.text.split(";")
    subjects = json.dumps(subjects)
    print("subjects: ",subjects)


    # if pdf exist
    is_pdf = 0
    if soup.text.find("PDF")>0:
        urllib.request.urlretrieve(host+"/pdf/"+id, "./pdf/"+id+".pdf")
        is_pdf = 1

    is_source = 0
    if soup.text.find("Other formats")>0:
        urllib.request.urlretrieve(host+"/e-print/"+id, "./sources/"+id+".tar.gz")
        is_source = 1

    try:
        cur.execute(sql, (id,title,authors,abstract,subjects,is_pdf,is_source,date,arxiv_class))
        db.commit()
    except BaseException as ex:
        # the ID is already there in database, break it first
        print(ex)
        break;

    # look at next url
    prev = soup.find("div",attrs={"class":"prevnext"}).find("a").get("href")
    r = requests.get(prev)
    soup = bs(r.text, features="html.parser")
    time.sleep(3)

db.commit()
db.close()

print(prev)
"""
