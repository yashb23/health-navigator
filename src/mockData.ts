import { User } from "./context/UserContextProvider";

// this could also be json
export const userData: User[] = [
  {
    id: 1,
    email: "yashbajaj234@gmail.com",
    dob: "1947-01-23",
    mrn: "235567686787",
    name: "Yash Bajaj",
    matchedTrials: [
      {
        description: "Researching advanced care protocols",
        location: "Hybrid",
        phase: 1,
        title: "Yash's Matched Trial 1",
      },
      {
        description: "Testing innovative therapies for respiratory health",
        location: "In-person",
        phase: 3,
        title: "Yash's Matched Trial 2",
      },
      {
        description: "Evaluating new treatments for chronic conditions",
        location: "Remote",
        phase: 2,
        title: "Yash's Matched Trial 3",
      },
    ],
  },
  {
    id: 2,
    email: "max@data-vault.health",
    dob: "1974-01-23",
    mrn: "23902923939",
    name: "Max Doppelt",
    matchedTrials: [
      {
        description: "Researching advanced care protocols",
        location: "In-person",
        phase: 2,
        title: "Max's Matched Trial 1",
      },
      {
        description: "Testing innovative therapies for respiratory health",
        location: "Hybrid",
        phase: 1,
        title: "Max's Matched Trial 2",
      },
      {
        description: "Evaluating new treatments for chronic conditions",
        location: "Remote",
        phase: 3,
        title: "Max's Matched Trial 3",
      },
    ],
  },
];
