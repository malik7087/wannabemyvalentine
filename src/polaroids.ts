export type Polroid = {
  img: string;
  top: number;
  left: number;
  index: number;
  rotate: number;
  caption: string;
};

// Customize Polaroids location, src and z-index

export const Polaroids: Polroid[] = [
  {
    img: 'First Image.PNG',
    top: -20,
    left: 1,
    index: 0,
    rotate: -6,
    caption: 'Remeber this day?',
  },
  {
    img: 'Second Image.PNG',
    top: 60,
    left: -1,
    index: 1,
    rotate: 6,
    caption: 'Look at Aatka',
  },
  {
    img: 'Third Image.PNG',
    top: -4,
    left: 17,
    index: 5,
    rotate: 6,
    caption: 'Samny Khalu kharay hain mery',
  },
  {
    img: 'Eleventh Image.PNG',
    top: -6,
    left: 52,
    index: 4,
    rotate: -6,
    caption: 'Mae appki ankhon mae doobna chahta hou',
  },
  {
    img: 'Fifth Image.PNG',
    top: 40,
    left: 80,
    index: 3,
    rotate: 6,
    caption: 'My Baby so Parru',
  },
  {
    img: 'Sixth Image.PNG',
    top: 40,
    left: 25,
    index: 3,
    rotate: -90,
    caption: 'World was healling',
  },
  {
    img: '/Ninth Image.PNG',
    top: -3,
    left: 33,
    index: 1,
    rotate: -6,
    caption: 'Hasty huaye aik dum meri lgti hae',
  },
  {
    img: 'Eight Image.PNG',
    top: 57,
    left: 61,
    index: 8,
    rotate: 6,
    caption: 'Cutu',
  },
  {
    img: 'Tenth Image.PNG',
    top: -16,
    left: 75,
    index: 1,
    rotate: -90,
    caption: 'Meri Perfect Baddie',
  }
];
