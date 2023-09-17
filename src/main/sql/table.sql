--회원
CREATE TABLE member(
    mem_num NUMBER(5),
    mem_id VARCHAR2(15) UNIQUE NOT NULL,
    mem_passwd VARCHAR2(30) NOT NULL,
    mem_reg_date DATE DEFAULT SYSDATE NOT NULL,
    mem_cell VARCHAR2(15) NOT NULL,
    mem_email VARCHAR2(20) NOT NULL,
    CONSTRAINT member_pk PRIMARY KEY (mem_num)
);
CREATE SEQUENCE member_seq;
--도서
CREATE TABLE book(
    callNumber VARCHAR2(10),
    isbn VARCHAR2(13) NOT NULL,
    class_no NUMBER(10) DEFAULT 0 NOT NULL,
    book_name VARCHAR2(200) NOT NULL,
    authors VARCHAR2(100) NOT NULL,
    publisher VARCHAR2(100) NOT NULL,
    bookImageUrl VARCHAR2(300) NOT NULL,
    publication_year VARCHAR2(7) NOT NULL,
    loanCnt NUMBER(10) DEFAULT 0 NOT NULL,
    book_status NUMBER DEFAULT 0 NOT NULL,
    book_detail VARCHAR2(4000) NOT NULL,
    CONSTRAINT book_pk PRIMARY KEY (callNumber)
);
--대출이력
CREATE TABLE rent_history(
    rent_num NUMBER,
    callNumber VARCHAR2(10) NOT NULL,
    mem_num NUMBER NOT NULL,
    book_status NUMBER NOT NULL,
    rent_reg_date DATE DEFAULT SYSDATE,
    overdue_value NUMBER,
    return_reg_deadline DATE DEFAULT SYSDATE+7 NOT NULL,
    return_reg_date DATE,
    CONSTRAINT rent_pk PRIMARY KEY (rent_num),
    CONSTRAINT rent_fk1 FOREIGN KEY (callNumber) REFERENCES book (callNumber),
    CONSTRAINT rent_fk2 FOREIGN KEY (mem_num) REFERENCES member (mem_num)
);
CREATE SEQUENCE rent_seq;