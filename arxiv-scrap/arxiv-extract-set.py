import sqlite3
import numpy as np
import json
import time
import csv

db = sqlite3.connect("arxiv.db")
sql = """SELECT * FROM ARXIV_API_TABLE WHERE CLASS = ? LIMIT 1000"""

cur = db.cursor()

class_list = [
    "cs.AI",
    "cs.AR",
    "cs.CC",
    "cs.CE",
    "cs.CG",
    "cs.CL",
    "cs.CR",
    "cs.CV",
    "cs.CY",
    "cs.DB",
    "cs.DC",
    "cs.DL",
    "cs.DM",
    "cs.DS",
    "cs.ET",
    "cs.FL",
    "cs.GL",
    "cs.GR",
    "cs.GT",
    "cs.HC",
    "cs.IR",
    "cs.IT",
    "cs.LG",
    "cs.LO",
    "cs.MA",
    "cs.MM",
    "cs.MS",
    "cs.NA",
    "cs.NE",
    "cs.NI",
    "cs.OH",
    "cs.OS",
    "cs.PF",
    "cs.PL",
    "cs.RO",
    "cs.SC",
    "cs.SD",
    "cs.SE",
    "cs.SI",
    "cs.SY"]

total_class = len(class_list)

dataset = []
with open('dataset.csv', 'w', encoding="utf-8") as csvfile:
    ds_writer = csv.writer(csvfile, delimiter=',')
    for my_class in class_list:
        print(my_class)
        data = cur.execute(sql,[my_class])
        #output = np.zeros(total_class)
        for row in data:
            ds_writer.writerow(list(row))
