CREATE TABLE "to-do-list" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR(255),
	"date-added" DATE,
	"is-complete" BOOLEAN DEFAULT FALSE
);

// sample data 
INSERT INTO "to-do-list"("task", "date-added", "is-compelte"),
('grab groceries', '2-12-2021', 'false'),
('laundry','1-1-2020','false');