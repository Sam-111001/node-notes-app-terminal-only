//importing notes.js file
const notes = require("./notes.js");
//importing yargs npm module
const yargs = require("yargs");
//defining commad add
yargs.command({
  command: "add",
  describe: "Adding a new note.",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body);
  },
});
//defining command remove
yargs.command({
  command: "remove",
  describe: "Removing a note.",
  builder: {
    title: {
      describe: "Title of the book.",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNotes(argv.title);
  },
});
//defining command list
yargs.command({
  command: "list",
  describe: "Listing all notes.",
  handler: function () {
    notes.listNotes();
  },
});
//defining command read
yargs.command({
  command: "read",
  describe: "Reading.",
  builder: {
    title: {
      describe: "Title of the book to read.",
      demandOption: true,
      type: "string,",
    },
  },
  handler: function (argv) {
    notes.readNotes(argv.title);
  },
});

yargs.parse();
