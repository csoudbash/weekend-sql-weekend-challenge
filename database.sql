CREATE TABLE "to-do-list" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(255),
	"description" VARCHAR(255),
	"date" VARCHAR(50),
	"isComplete" BOOLEAN DEFAULT FALSE
);


// sample data 
INSERT INTO "to-do-list"("task", "description", "date", "isComplete") VALUES
('grab groceries','thing','1/1/2022','false'),
('laundry','things','1/12/2022','false'),
('walk dog', 'thing','12/1/2022' ,'false');
