import { officerList } from "./officers/OfficerList.js"
officerList();

import {listOfCriminals} from "./criminals/CriminalList.js"
listOfCriminals();
import { ConvictionSelect } from "./convictions/ConvictionSelect.js";
import { OfficerSelect } from "./officers/OfficerSelect.js";
import { NoteForm } from "./notes/NoteForm.js";
import { NoteList } from "./notes/NoteList.js";


ConvictionSelect();
OfficerSelect();
NoteForm();
NoteList();