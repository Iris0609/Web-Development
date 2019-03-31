// Some concepts
1. DBMS: Database Management System, program to interact with the databases.
Create and manage database. Store, modify and extract data.

2. RDBMS: Relational Database Management System
Relational database is the database that follows relational model by E.F.Codd

3. Database schema: database logic and structure

4. Database Engine: Storage Engine

5. Two types of SQL statements: Data Definition Language(DDL), Data Manipulation Language(DML)

6. DDL: change database structure
DML: only change data

// SQL
5. SQL
SHOW DATABASES;

CREATE DATABASE school;

USE school;

DROP DATABASE school

SHOW TABLES;

CREATE TABLE students(
id INT NOT NULL PRIMARY KEY,
name VARCHAR(40) NOT NULL,
class VARCHAR(20),
age INT);

DROP TABLE students;

DESC students;

INSERT INTO tablename(column 1, column2) VALUES (VAL1,VAL2);


// SQL Constraints
not null, primary key, unique, foreign key, check, default
1. foreign key:
	i. a foreign key in a table always points to a primary key in another table
	ii. the foreign key constraint terminates the actions that can destroy the links between relational table;
	iii. the foreign key constraint also restrict adding invalid data to the foreign key column because the foreign key column values must be similar to the linked primary key values
SQL Example:
ALTER TABLE teachers ADD CONSTRAINT fk_subjectid FOREIGN KEY(subjectid) REFERENCES subjects(subjectid);

* if want to drop the foreign key column, first drop the foreign key constraints, then drop the column
ALER TABLE teachers DROP FOREIGN KEY fk_subjectid;
ALER TABLE teachers DROP COLUMN subjectid;

2. check
	i. The check constraint is used to control the value range that can be stored in a table column.
	ii. A table column with CHECK constraint defined will save only specific values in the column.
	iii. The CHECK constraint can be applied to a single or multiple table columns.
SQL Example:
CREATE TABLE tablename(
col1 datatype,
col2 datatype,
CHECK(col1>0)
);
ALTER TABLE tablename ADD CONSTRAINT chk_col1 CHECK(col1>0);

3. DEFAULT 
	i. The DEFAULT Constraint is used to set a default value for a data column
SQL Example:
CREATE TABLE tablename(
col1 datatype,
col2 datatype DEFAULT 'novalue'
);
ALTER TABLE tablename ALTER col1 SET DEFAULT 'novalue'; 

//AUTO INCREMENT or SEQUENCE
The AUTO_INCREMENT attribute generates and save a unique number every time a new data row inserted into a table. Auto_increment doesn't have zero index.
SQL Example:
CREATE TABLE tablename(col1 datatype NOT NULL PRIMARY KEY AUTO_INCREMENT, col2 datatype);

//SQL_SAFE_UPDATES
when sql_safe_updates=1, you can't delete records without where or limit, even though you have where or limit, you cannot delete without key column;
when equals 0, you can.

//limit 
limit (offset 0), 10

//sql type
text, int 
1. difference between varchar and char: varchar is variable char, which size is depending on the content; char's size is fixed.

