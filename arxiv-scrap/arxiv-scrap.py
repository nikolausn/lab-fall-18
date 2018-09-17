import requests
import urllib
from bs4 import BeautifulSoup as bs
import sqlite3
import json
import time

db = sqlite3.connect("arxiv.db")
sql = ''' INSERT INTO arxiv_table(id,title,authors,abstract,subjects,is_pdf,is_source,pub_date,class)
           VALUES(?,?,?,?,?,?,?,?,?) '''
cur = db.cursor()

host = "https://arxiv.org"

# the seed
arxiv_class="cs.AI"
arxiv_seed="https://arxiv.org/abs/1808.04444"
r = requests.get("{}?context={}".format(arxiv_seed,arxiv_class))
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
