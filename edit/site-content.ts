/**
 * EDIT WEBSITE CONTENT HERE
 *
 * Images belong in the `public/images` folder. Use a path beginning with `/`.
 * Example: image: "/images/team/president.jpg"
 *
 * Leave an image as `null` to display the built-in portrait placeholder.
 */

type EditableImage = {
  src: string | null;
  alt: string;
};

type EventContent = {
  id: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  highlight: string;
  primaryImage: EditableImage;
  secondaryImage: EditableImage;
};

type Person = {
  name: string;
  role: string;
  image: string | null;
  imageAlt: string;
  details: string;
};

type Leader = Person & {
  year: string;
};

export const events: EventContent[] = [
  {
    id: "cybok-2026",
    title: "CYBOK 2026:",
    subtitle: "Cybersecurity Unfiltered",
    paragraphs: [
      "CYBOK 2026 brought together real-world stories, expert insights, and engaging discussions for a memorable day of learning and exploring cybersecurity.",
      "Thank you to everyone who participated and helped make the event meaningful.",
    ],
    highlight:
      "Rotaract Club of Butwal Synergy was proud to help CSIT Association of Nepal–Rupandehi organize the event, together with Rotaract Tinau City.",
    primaryImage: {
      src: "/cybok 1.jpeg",
      alt: "Participants and organizers at CYBOK 2026",
    },
    secondaryImage: {
      src: "/cybok.jpeg",
      alt: "Guests and attendees at the CYBOK 2026 cybersecurity event",
    },
  },
  // Copy the object above and paste it here to add another event.
];

export const teamMembers: Person[] = [
  {
    name: "Team Member 01",
    role: "President",
    image: null,
    imageAlt: "Portrait of the club president",
    details: "Member details coming soon",
  },
  {
    name: "Team Member 02",
    role: "Secretary",
    image: null,
    imageAlt: "Portrait of the club secretary",
    details: "Member details coming soon",
  },
  {
    name: "Team Member 03",
    role: "Treasurer",
    image: null,
    imageAlt: "Portrait of the club treasurer",
    details: "Member details coming soon",
  },
  {
    name: "Team Member 04",
    role: "Immediate Past President",
    image: null,
    imageAlt: "Portrait of the immediate past president",
    details: "Member details coming soon",
  },
  {
    name: "Team Member 05",
    role: "Vice President I",
    image: null,
    imageAlt: "Portrait of vice president one",
    details: "Member details coming soon",
  },
  {
    name: "Team Member 06",
    role: "Vice President II",
    image: null,
    imageAlt: "Portrait of vice president two",
    details: "Member details coming soon",
  },
  {
    name: "Team Member 07",
    role: "Club Service Director",
    image: null,
    imageAlt: "Portrait of the club service director",
    details: "Member details coming soon",
  },
  {
    name: "Team Member 08",
    role: "Community Service Director",
    image: null,
    imageAlt: "Portrait of the community service director",
    details: "Member details coming soon",
  },
  {
    name: "Team Member 09",
    role: "International Service Director",
    image: null,
    imageAlt: "Portrait of the international service director",
    details: "Member details coming soon",
  },
  {
    name: "Team Member 10",
    role: "Professional Development Director",
    image: null,
    imageAlt: "Portrait of the professional development director",
    details: "Member details coming soon",
  },
  {
    name: "Team Member 11",
    role: "Membership Chair",
    image: null,
    imageAlt: "Portrait of the membership chair",
    details: "Member details coming soon",
  },
  {
    name: "Team Member 12",
    role: "Public Image Chair",
    image: null,
    imageAlt: "Portrait of the public image chair",
    details: "Member details coming soon",
  },
  {
    name: "Team Member 13",
    role: "Sergeant-at-Arms",
    image: null,
    imageAlt: "Portrait of the sergeant-at-arms",
    details: "Member details coming soon",
  },
];

export const leaders: Leader[] = [
  {
    name: "Leader 01",
    role: "Charter President",
    year: "Rotary Year 20XX–XX",
    image: null,
    imageAlt: "Portrait of leader 1",
    details: "Leader details coming soon",
  },
  {
    name: "Leader 02",
    role: "President",
    year: "Rotary Year 20XX–XX",
    image: null,
    imageAlt: "Portrait of leader 2",
    details: "Leader details coming soon",
  },
  {
    name: "Leader 03",
    role: "President",
    year: "Rotary Year 20XX–XX",
    image: null,
    imageAlt: "Portrait of leader 3",
    details: "Leader details coming soon",
  },
  {
    name: "Leader 04",
    role: "President",
    year: "Rotary Year 20XX–XX",
    image: null,
    imageAlt: "Portrait of leader 4",
    details: "Leader details coming soon",
  },
  {
    name: "Leader 05",
    role: "President",
    year: "Rotary Year 20XX–XX",
    image: null,
    imageAlt: "Portrait of leader 5",
    details: "Leader details coming soon",
  },
  {
    name: "Leader 06",
    role: "President",
    year: "Rotary Year 20XX–XX",
    image: null,
    imageAlt: "Portrait of leader 6",
    details: "Leader details coming soon",
  },
  {
    name: "Leader 07",
    role: "President",
    year: "Rotary Year 20XX–XX",
    image: null,
    imageAlt: "Portrait of leader 7",
    details: "Leader details coming soon",
  },
  {
    name: "Leader 08",
    role: "President",
    year: "Rotary Year 20XX–XX",
    image: null,
    imageAlt: "Portrait of leader 8",
    details: "Leader details coming soon",
  },
  {
    name: "Leader 09",
    role: "President",
    year: "Rotary Year 20XX–XX",
    image: null,
    imageAlt: "Portrait of leader 9",
    details: "Leader details coming soon",
  },
];
