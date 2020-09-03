import { officerList } from "./officers/OfficerList.js"
officerList();

import {listOfCriminals} from "./criminals/CriminalList.js"
listOfCriminals();
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { saveNote } from "./notes/NotesProvider.js";
import { NoteForm } from "./notes/NoteForm.js";


ConvictionSelect();
OfficerSelect();
saveNote();
NoteForm();
// import{ CriminalList } from "./criminals/CriminalList.js"
// CriminalList();