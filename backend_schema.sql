-- ANUSHIL HOME TUITION production database blueprint
CREATE TABLE students (
 id BIGSERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 email TEXT UNIQUE,
 phone TEXT,
 class_name TEXT,
 created_at TIMESTAMPTZ DEFAULT now()
);
CREATE TABLE courses (
 id BIGSERIAL PRIMARY KEY,
 title TEXT NOT NULL,
 description TEXT,
 fee NUMERIC(10,2),
 created_at TIMESTAMPTZ DEFAULT now()
);
CREATE TABLE materials (
 id BIGSERIAL PRIMARY KEY,
 title TEXT NOT NULL,
 subject TEXT,
 file_url TEXT,
 created_at TIMESTAMPTZ DEFAULT now()
);
CREATE TABLE tests (
 id BIGSERIAL PRIMARY KEY,
 title TEXT NOT NULL,
 created_at TIMESTAMPTZ DEFAULT now()
);
CREATE TABLE test_results (
 id BIGSERIAL PRIMARY KEY,
 student_id BIGINT REFERENCES students(id),
 test_id BIGINT REFERENCES tests(id),
 score INT,
 total INT,
 created_at TIMESTAMPTZ DEFAULT now()
);
CREATE TABLE notices (
 id BIGSERIAL PRIMARY KEY,
 title TEXT NOT NULL,
 body TEXT NOT NULL,
 created_at TIMESTAMPTZ DEFAULT now()
);
CREATE TABLE payments (
 id BIGSERIAL PRIMARY KEY,
 student_id BIGINT REFERENCES students(id),
 amount NUMERIC(10,2) NOT NULL,
 status TEXT NOT NULL,
 gateway_reference TEXT,
 created_at TIMESTAMPTZ DEFAULT now()
);
CREATE TABLE attendance (
 id BIGSERIAL PRIMARY KEY,
 student_id BIGINT REFERENCES students(id),
 class_date DATE NOT NULL,
 status TEXT NOT NULL,
 created_at TIMESTAMPTZ DEFAULT now()
);
