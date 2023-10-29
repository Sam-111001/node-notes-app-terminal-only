//importing fs module from node
const fs = require("fs");
//importing chalk npm module
const chalk = require("chalk");
//defining addNotes function
const addNotes = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.find(function (note) {
    return note.title === title;
  });
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green("Notes added successfully."));
  } else {
    console.log(chalk.red("Note title taken."));
  }
};
//defining readNotes funcion
const readNotes = function (title) {
  const notes = loadNotes();
  const notesData = notes.find(function (note) {
    return note.title === title;
  });
  if (notesData) {
    console.log(chalk.green("Notes found."));
    console.log("Title: " + chalk.italic(notesData.title));
    console.log("Body: " + notesData.body);
  } else {
    console.log(chalk.red("Notes not found."));
  }
};
//defining removeNotes function
const removeNotes = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });
  if (notes.length === notesToKeep.length) {
    console.log(chalk.red("Notes was not found."));
  } else {
    saveNotes(notesToKeep);
    console.log(chalk.green("Notes removed successfully."));
  }
};
//defining listNotes function
const listNotes = function () {
  const notes = loadNotes();
  const notesTitles = [];
  notes.filter(function (note) {
    notesTitles.push(note.title);
  });
  console.log(notesTitles);
};
//defining saveNotes function
const saveNotes = function (notes) {
  const jsonData = JSON.stringify(notes);
  fs.writeFileSync("notes.json", jsonData);
};
//defining loadNotes function
const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const parsedData = JSON.parse(dataBuffer);
    return parsedData;
  } catch (error) {
    return [];
  }
};
//expoting module functions
module.exports = {
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
