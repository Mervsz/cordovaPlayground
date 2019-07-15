import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { File, DirectoryEntry } from '@ionic-native/file';
import { SQLite, SQLiteObject,   } from '@ionic-native/sqlite'
import { Person } from '../../model/person.model';

/**
 * Generated class for the FileGeneratorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-file-generator',
  templateUrl: 'file-generator.html',
})
export class FileGeneratorPage {
  title: string = "File Generator";
  persons: Person[] = [];
  url: string = 'files:///Documents'
  constructor(public platform: Platform, private file: File, private sqlite: SQLite) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileGeneratorPage');
  }

//  `File Check
  fileCheck(){
    console.log('File Check');
    this.file.checkFile( this.url, 'tempDB.txt')
    .then((res) => console.log('Good' + res)).catch(err => {
      console.log(JSON.stringify(err), "data in stringss")
      console.log('Bad' + err)
    });
  }

  createFile(data){
    console.log(data , "check persons")
    this.file.createFile(this.url, 'tempDB.txt', true)
    .then((res) => {
      return this.file.writeExistingFile(this.url, 'tempDB.txt', JSON.stringify(data))
    })
    .then((res) => console.log('create success in Sync Directory', res))
    .catch((err) => console.log('error', err))
  }

  customCreate(){
    this.file.createDir(this.url, "newDir", true)
    .then((res) => {
      return this.file.createFile(this.url + "newDir", "sample.txt", true)
    })
    .then((res) => console.log('create success in Custom Directory', res))
    .catch((err) => console.log('error', err))
  }

  readFile(){
    this.file.readAsText(this.file.externalRootDirectory, 'new.txt')
    .then((res) =>  JSON.parse(res))
    .then((val) => console.log("converted val", val))
    .catch((err) => console.log("error", err))
  }

  getFile(){
    // this.file.getFile(this.dirEntry., 'new.db', {})
    // .then
    this.platform.ready()
    .then(() => {
      return this.file.resolveDirectoryUrl(this.file.externalRootDirectory)
    })
    .then((rootDir) => {
      // console.log(rootDir, "result")
      return this.file.getFile(rootDir, 'new.txt', { create: false })
      // alert('root' + rootDir.getFile)
      // return this.file.getFile(rootDir, 'new.db', {create: false})
    })
    .then((fileEntry) => {
      fileEntry.file(file => {
        console.log(file, 'file Entry')
      })
    })
    .catch((err) => console.log("error", err))
  }

  dbCreate(){
    this.sqlite.create({
      name: 'new.db',
      location: 'default',
    })
      .then((db: SQLiteObject) => {
        db.sqlBatch([
          'create table if not exists person(name VARCHAR(32), age VARCHAR(2), address VARCHAR(50))',
          `INSERT INTO person (name,age,address) VALUES ('renz', '99', 'bicutan')`,
          `INSERT INTO person (name,age,address) VALUES ('ian', '70', 'cavite')`,
          `INSERT INTO person (name,age,address) VALUES ('liz', '12', 'batangas')`,
          // [`INSERT INTO person VALUES(?,?,?)`,['ian', '70', 'cavite']],
          // [`INSERT INTO person VALUES(?,?,?)`,['liz', '99', 'batangas']],
        ])
        // db.sqlBatch([`INSERT INTO danceMoves VALUES(?)`,['renz']])
        // db.executeSql('create table danceMoves(name VARCHAR(32))', [])
          .then((g) => console.log('Executed SQL', g))
          .catch(e => console.log('error' + e));
      })
      .catch(e => alert(e));
  }

  dbPersonNames(){
    this.sqlite.create({
      name: 'new.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      db.executeSql(`SELECT * FROM person`, [])
      .then((res) => {
        console.log(res.rows.length)
        let count = 0;
        let g: Person[] = []
        do{
          let p: Person = res.rows.item(count)
            g.push({
            name: p.name,
            age: p.age,
            address: p.address
          })
          count++;
        }while(count < res.rows.length)
        this.persons = g
        console.log("all person",this.persons )
      })
    })
  }

  exportDB(){
    this.sqlite.create({
      name: 'new.db',
      location: 'default'
    })
    .then((db: SQLiteObject) => {
      db.executeSql(`SELECT * FROM person`, [])
      .then((res) => {
        let count = 0;
        let g: Person[] = []
        do{
          let p: Person = res.rows.item(count)
            g.push({
            name: p.name,
            age: p.age,
            address: p.address
          })
          count++;
        }while(count < res.rows.length)
        this.createFile(g)
      })
    })
  }
}
