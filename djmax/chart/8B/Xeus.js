const measureStart = 2;
const keys = 8;
const data = [
  {
    "No": 0,
    "A1": null,
    "A2": null,
    "A3": null,
    "A4": null,
    "A5": null,
    "A6": null,
    "A7": null,
    "A8": null,
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 1,
    "A1": null,
    "A2": "0000000000010000",
    "A3": null,
    "A4": "00000000000000000100000000000001",
    "A5": null,
    "A6": "0000000000000001",
    "A7": "00000000000000000000000000010000",
    "A8": "00000001",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": "01000000000000000000000100000000"
  },
  {
    "No": 2,
    "A1": "01010101",
    "A2": null,
    "A3": "0100000100010000",
    "A4": null,
    "A5": null,
    "A6": null,
    "A7": "00010001",
    "A8": null,
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": "01000001010000010100000101000001",
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 3,
    "A1": "01010101",
    "A2": null,
    "A3": "0000000100010000",
    "A4": null,
    "A5": null,
    "A6": null,
    "A7": "0001000000000100",
    "A8": null,
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": "01000001010000010100000101000001",
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 4,
    "A1": null,
    "A2": null,
    "A3": "0100000100010000",
    "A4": null,
    "A5": "01010101",
    "A6": null,
    "A7": "00010001",
    "A8": null,
    "L1": "01000001010000010100000101000001",
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 5,
    "A1": null,
    "A2": null,
    "A3": "0000000100000100",
    "A4": "0000000000010001",
    "A5": "01010101",
    "A6": "00000000000000000001000000000000",
    "A7": "0001000001000100",
    "A8": null,
    "L1": "01000001010000010100000101000001",
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 6,
    "A1": "01010101",
    "A2": "00000001000100000001000000000100",
    "A3": null,
    "A4": "00000100000001000000010000010000",
    "A5": null,
    "A6": "00010000",
    "A7": "0100000100000100",
    "A8": "00010000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": "01000001010000010100000101000001",
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 7,
    "A1": "01010101",
    "A2": "00000001000100000000010000000000",
    "A3": "00000001",
    "A4": "00000100000001000001000000000100",
    "A5": null,
    "A6": "0000000000010000",
    "A7": "0000000100000100",
    "A8": "0001000000000000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": "01000001010000010100000101000001",
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 8,
    "A1": null,
    "A2": "0000000100010000",
    "A3": "01000001",
    "A4": "00010000",
    "A5": "01010101",
    "A6": "00000001000100000000010000010000",
    "A7": null,
    "A8": "00000100000001000001000000000100",
    "L1": "01000001010000010100000101000001",
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 9,
    "A1": null,
    "A2": null,
    "A3": "00000000000000000000010000000001",
    "A4": "0000000000000001",
    "A5": "01",
    "A6": "00000000000000000000000000010000",
    "A7": "01000001",
    "A8": null,
    "L1": "01000001010000010100000101000001",
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": "00000000000001000001000000000000",
    "L7": null,
    "L8": "00000100000100000000000000000000",
    "S1": null,
    "S2": null
  },
  {
    "No": 10,
    "A1": null,
    "A2": "01010101",
    "A3": null,
    "A4": "00010001",
    "A5": "01",
    "A6": null,
    "A7": "00000001000001000000000100000100",
    "A8": null,
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": "0101000001010000",
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 11,
    "A1": null,
    "A2": "01010101",
    "A3": null,
    "A4": "00010001",
    "A5": null,
    "A6": "00000000000000000000000100000000",
    "A7": "0000000000000001",
    "A8": "0000010100000000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": "0000000001010000",
    "L7": null,
    "L8": "00010001000000000000000000000000",
    "S1": null,
    "S2": null
  },
  {
    "No": 12,
    "A1": null,
    "A2": null,
    "A3": "00000001000001000000000100000100",
    "A4": null,
    "A5": null,
    "A6": "00010001",
    "A7": null,
    "A8": "01010101",
    "L1": null,
    "L2": null,
    "L3": "0101000001010000",
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 13,
    "A1": null,
    "A2": "0000010100000000",
    "A3": "00000000000000000000000100000000",
    "A4": "0000000000000001",
    "A5": null,
    "A6": "00010001",
    "A7": null,
    "A8": "01010101",
    "L1": null,
    "L2": "00010001000000000000000000000000",
    "L3": "0000000001010000",
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 14,
    "A1": null,
    "A2": "01010101",
    "A3": null,
    "A4": "00010001",
    "A5": "00000001000001000000000000000000",
    "A6": "0000000000000001",
    "A7": "00000000000000000000000100000000",
    "A8": null,
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": "0101000001010000",
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 15,
    "A1": "0000010100000000",
    "A2": null,
    "A3": "00000000000000000000000100000000",
    "A4": "0000000000000001",
    "A5": null,
    "A6": "00010001",
    "A7": null,
    "A8": "01010101",
    "L1": "00010001000000000000000000000000",
    "L2": null,
    "L3": "0000000001010000",
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 16,
    "A1": null,
    "A2": "01010101",
    "A3": null,
    "A4": "00010001",
    "A5": null,
    "A6": "00000000000000000000000100000000",
    "A7": "00000001000001000000000000000100",
    "A8": null,
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": "0101000001010000",
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 17,
    "A1": null,
    "A2": "0000000000000001",
    "A3": "00000000000000000000000100000000",
    "A4": "0000010100000000",
    "A5": null,
    "A6": "00010001",
    "A7": null,
    "A8": "01010101",
    "L1": null,
    "L2": null,
    "L3": "0000000001010000",
    "L4": "00010001000000000000000000000000",
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 18,
    "A1": "0100010100000101",
    "A2": null,
    "A3": "01010101",
    "A4": null,
    "A5": "00000000000100010000000000010001",
    "A6": "00000001000001000000000100000100",
    "A7": null,
    "A8": "00000001000001000000000100000100",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": "0101000001010000",
    "L7": null,
    "L8": "0101000001010000",
    "S1": null,
    "S2": null
  },
  {
    "No": 19,
    "A1": "0000010100000101",
    "A2": "00000000000000000000000100000000",
    "A3": "00010000010001000000000000000000",
    "A4": "00000000000000000000000100000100",
    "A5": "00000000000100010000000000010001",
    "A6": "00010000010001000000000001000000",
    "A7": "0100000001000001",
    "A8": "00010000",
    "L1": null,
    "L2": "0000000001010000",
    "L3": null,
    "L4": "0000000001010000",
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 20,
    "A1": "00000000000100010000000000010001",
    "A2": null,
    "A3": "01010101",
    "A4": null,
    "A5": "0000010100000101",
    "A6": "00000001000001000000000100000100",
    "A7": null,
    "A8": "00000001000001000000000100000100",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": "0101000001010000",
    "L7": null,
    "L8": "0101000001010000",
    "S1": null,
    "S2": null
  },
  {
    "No": 21,
    "A1": "00000000000100010000000000010001",
    "A2": "00010000010001000000000000000000",
    "A3": "00000000000000000000000100000000",
    "A4": "00010000010001000000000000000100",
    "A5": "0000010100000101",
    "A6": "00000000000000000000000100000000",
    "A7": "0100010000000001",
    "A8": "00000101",
    "L1": null,
    "L2": null,
    "L3": "0000000001010000",
    "L4": null,
    "L5": null,
    "L6": "0000000001010000",
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 22,
    "A1": null,
    "A2": "0100010101000101",
    "A3": null,
    "A4": "00000000000100010000000000010001",
    "A5": "00000001000001000000000000000100",
    "A6": "00000000000000000000000100000000",
    "A7": "00000001000001000000000000000100",
    "A8": "00000000000000000000000100000000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": "0101000001010000",
    "L6": null,
    "L7": "0101000001010000",
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 23,
    "A1": "00010000010001000000000000000100",
    "A2": "00000000000000000000000100000000",
    "A3": "00010000010001000000000000000100",
    "A4": "00000000000000000000000100000000",
    "A5": null,
    "A6": "00000000000100010000000000010001",
    "A7": null,
    "A8": "0100010101000101",
    "L1": null,
    "L2": "0000000001010000",
    "L3": null,
    "L4": "0000000001010000",
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 24,
    "A1": "0000010100000101",
    "A2": "0101",
    "A3": "00000000000000000000000100000000",
    "A4": "00000001000001000000000000000100",
    "A5": "00000000000100010000000000010001",
    "A6": "00000000000000000000000100000000",
    "A7": "00000001000001000000000000000100",
    "A8": null,
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": "0101000001010000",
    "L5": null,
    "L6": null,
    "L7": "0101000001010000",
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 25,
    "A1": null,
    "A2": "00000001000000010000000100000001",
    "A3": "0001010101010101",
    "A4": "00010001000100000001000000010001",
    "A5": null,
    "A6": "01000100000001000100000100000100",
    "A7": "00010000000100010000010000010000",
    "A8": "01000000010000000001000001000000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 26,
    "A1": "01",
    "A2": "00000000000000000000000000000001",
    "A3": "01000000010000000000000000010000",
    "A4": "0001000000010001",
    "A5": null,
    "A6": "00000100000100010001000001000000",
    "A7": "00010000010000000100000100000100",
    "A8": "01000001000001000000000001000000",
    "L1": "0000000100000100",
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 27,
    "A1": null,
    "A2": "00000000000001000000010000010000",
    "A3": "00000100000000010001000001000100",
    "A4": "00000000010001000100000100000001",
    "A5": null,
    "A6": "00000100000100010000000000000100",
    "A7": "00010000010000000100000001000000",
    "A8": "01000001000000000000010000000000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": "0000000100000100",
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 28,
    "A1": null,
    "A2": "00000100000000010000000000000100",
    "A3": "01000000010000000001000000000001",
    "A4": "0000000101000000",
    "A5": null,
    "A6": "00000100000100000000010000010000",
    "A7": "00010000010000000000000001000100",
    "A8": "01000001000000000000000100000001",
    "L1": null,
    "L2": "00000000000000000000010000010000",
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": "00000000000001000001000000000000",
    "S1": null,
    "S2": null
  },
  {
    "No": 29,
    "A1": "00000000000000000100000100000000",
    "A2": "00000100000100000000000001000000",
    "A3": "00010000010000010000010000010001",
    "A4": "01000001000001000001000000000100",
    "A5": "01000001000001000000000000000000",
    "A6": "00000100000100000100000100000001",
    "A7": "00010000010000010001000001000100",
    "A8": "00000000000000000000010000010000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 30,
    "A1": null,
    "A2": "01000001000001000000000000000000",
    "A3": "00010000010000000100000100000100",
    "A4": "00000100000100010001000001000001",
    "A5": null,
    "A6": "00000100000000000000010000010000",
    "A7": "0100010000000001",
    "A8": "00000001",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": "0000000100000100",
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 31,
    "A1": null,
    "A2": "00000000000001000000010000010000",
    "A3": "00000100000100010001000001000100",
    "A4": "00010000010000000100000100000001",
    "A5": null,
    "A6": "01000001000001000000000000000100",
    "A7": "00000100000000010000000001000000",
    "A8": "0000000001010000",
    "L1": "0000000100000100",
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 32,
    "A1": null,
    "A2": "00000100000000010000000000000000",
    "A3": "01000000010000000000000000000001",
    "A4": "00000000000001000000010000010000",
    "A5": null,
    "A6": "00000100000100000001000001000000",
    "A7": "00010000010000000000000000000000",
    "A8": "01000001000000000100000100000100",
    "L1": null,
    "L2": null,
    "L3": "00000000000000000000010000010000",
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": "00000000000001000001000000000000",
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 33,
    "A1": "00000000000100010000000001000100",
    "A2": "01000001000000000000010000000000",
    "A3": "00010000010001000001000000010001",
    "A4": "00000100000000000100000100000000",
    "A5": "00010001000000000100010000000000",
    "A6": "00000000010000010000000000000100",
    "A7": "01000100000001000001000100010001",
    "A8": "00000000000100000000000001000000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 34,
    "A1": null,
    "A2": "00000000010000000000000000000001",
    "A3": "00000100000000000000000000010000",
    "A4": "0100000000010001",
    "A5": null,
    "A6": "00000100000100010001000001000000",
    "A7": "00010000010000000100000100000100",
    "A8": "01000001000001000000000001000000",
    "L1": "0000000100000100",
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 35,
    "A1": null,
    "A2": "00000000000001000000010000010000",
    "A3": "00000100000000010001000001000100",
    "A4": "00000000010001000100000100000001",
    "A5": null,
    "A6": "00000100000100010000000000000100",
    "A7": "00010000010000000100000001000000",
    "A8": "01000001000000000000010000000000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": "0000000100000100",
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 36,
    "A1": null,
    "A2": "00000100000000010000000000000100",
    "A3": "01000000010000000001000000000001",
    "A4": "0000000101000000",
    "A5": null,
    "A6": "00000100000100000000010000010000",
    "A7": "00010000010000000000000001000100",
    "A8": "01000001000000000000000100000001",
    "L1": null,
    "L2": "00000000000000000000010000010000",
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": "00000000000001000001000000000000",
    "S1": null,
    "S2": null
  },
  {
    "No": 37,
    "A1": "00000000000000000100000100000000",
    "A2": "00000100000100000000000001000000",
    "A3": "00010000010000010000010000010001",
    "A4": "01000001000001000001000000000100",
    "A5": "01000001000001000000000000000000",
    "A6": "00000100000100000100000100000001",
    "A7": "00010000010000010001000001000100",
    "A8": "00000000000000000000010000010000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 38,
    "A1": null,
    "A2": "01000001000001000000000000000000",
    "A3": "00010000010000000100000100000100",
    "A4": "00000100000100010001000001000001",
    "A5": null,
    "A6": "00000100000000000000010000010000",
    "A7": "0100010000000001",
    "A8": "00000001",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": "0000000100000100",
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 39,
    "A1": null,
    "A2": "0000000100010101",
    "A3": "00000100000100010001000100000001",
    "A4": "00010000010000000100000001000100",
    "A5": null,
    "A6": "01000001000001000000000000000100",
    "A7": "00000100000000010000000001000000",
    "A8": "00000000010000000100010000010000",
    "L1": "0000000100000100",
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 40,
    "A1": null,
    "A2": "01000100010001000100000100000000",
    "A3": "00000100000100000000000000000100",
    "A4": "00000000000000010001000001000001",
    "A5": null,
    "A6": "00010000010000000000000000000001",
    "A7": "00000000000001000000010000010000",
    "A8": "01000001000000000100010001000100",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 41,
    "A1": "00000000000000000001000000010001",
    "A2": "0101010101000000",
    "A3": "0000000000010000",
    "A4": "00010001000100010000000000000000",
    "A5": "0000000001010101",
    "A6": "00010001000100010001000000000000",
    "A7": null,
    "A8": "0101010101000000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 42,
    "A1": null,
    "A2": "00000001000000000000010000000000",
    "A3": "01010000000000000000000001000000",
    "A4": "0000000100000001",
    "A5": null,
    "A6": null,
    "A7": null,
    "A8": null,
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": "01"
  },
  {
    "No": 43,
    "A1": null,
    "A2": "00000001000000000000010000000000",
    "A3": "01010000000000000000000001000000",
    "A4": "0000000100000001",
    "A5": null,
    "A6": null,
    "A7": "0000000000000001",
    "A8": null,
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": "00000001"
  },
  {
    "No": 44,
    "A1": null,
    "A2": null,
    "A3": null,
    "A4": null,
    "A5": null,
    "A6": null,
    "A7": "01000001000001000000010101000100",
    "A8": null,
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": "01",
    "S2": null
  },
  {
    "No": 45,
    "A1": null,
    "A2": null,
    "A3": null,
    "A4": "0000000000000001",
    "A5": null,
    "A6": "00000001",
    "A7": "0000000000010000",
    "A8": "01000001000001000000000000000000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": "00000001",
    "S2": null
  },
  {
    "No": 46,
    "A1": null,
    "A2": "00000001000000000000010000000000",
    "A3": "01010000000000000000000001000000",
    "A4": "0000000100000001",
    "A5": null,
    "A6": null,
    "A7": null,
    "A8": null,
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": "01"
  },
  {
    "No": 47,
    "A1": null,
    "A2": "00000001000000000000010000000000",
    "A3": "01010000000000000000000001000000",
    "A4": "0000000100000001",
    "A5": null,
    "A6": null,
    "A7": "0000000000000001",
    "A8": null,
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": "00000001"
  },
  {
    "No": 48,
    "A1": null,
    "A2": null,
    "A3": null,
    "A4": null,
    "A5": null,
    "A6": "01",
    "A7": "00000001000000000000010001000100",
    "A8": "0000000100000000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": "01",
    "S2": null
  },
  {
    "No": 49,
    "A1": null,
    "A2": null,
    "A3": "0000000000000001",
    "A4": null,
    "A5": "01",
    "A6": "0000000100000100",
    "A7": "01",
    "A8": "00000001000000000000010100000000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": "00000001",
    "S2": null
  },
  {
    "No": 50,
    "A1": "00010001",
    "A2": null,
    "A3": "00010101",
    "A4": null,
    "A5": null,
    "A6": "00000001000000000000010000000000",
    "A7": "01010000000000000000000001000000",
    "A8": "0000000100000001",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": "01",
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 51,
    "A1": "00010001",
    "A2": null,
    "A3": "01010101",
    "A4": "0000000000000001",
    "A5": null,
    "A6": "00000001000000000000010000000000",
    "A7": "01010000000000000000000001000000",
    "A8": "0000000100000001",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": "00000001",
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 52,
    "A1": null,
    "A2": null,
    "A3": "01000001000001000000010101000100",
    "A4": null,
    "A5": "00010001",
    "A6": null,
    "A7": "01010101",
    "A8": null,
    "L1": "01",
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 53,
    "A1": null,
    "A2": "0000000000000001",
    "A3": "00000001",
    "A4": "01000001000001000000010000000000",
    "A5": "00010001",
    "A6": null,
    "A7": "01010101",
    "A8": null,
    "L1": "0000000000000001",
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 54,
    "A1": null,
    "A2": null,
    "A3": "00000000010100000000010100000000",
    "A4": null,
    "A5": "00000000000000000000000001010000",
    "A6": "00000101000000000101000000000000",
    "A7": null,
    "A8": "01010000000001010000000000000000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 55,
    "A1": null,
    "A2": "00000000010100000000010100000000",
    "A3": "0000000000000101",
    "A4": "00000101000000000101000000000000",
    "A5": null,
    "A6": "00000000000000000000000000000101",
    "A7": "01010000000001010000000000000000",
    "A8": "00000000000000000000000001010000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 56,
    "A1": "00000000010001000000000001010000",
    "A2": "00000000010100000101000000000000",
    "A3": null,
    "A4": "00000101000000000101000000000000",
    "A5": "01000100000000000000000001010000",
    "A6": "00000000000000000000010100000000",
    "A7": "01010000000001010000000000000000",
    "A8": "00000000000000000000010100000000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 57,
    "A1": null,
    "A2": "0101010001010100",
    "A3": "00000000000100010001000100010000",
    "A4": "00010001000001000000000001000100",
    "A5": null,
    "A6": "00000100000100010000000100010001",
    "A7": "00010001000000000100010000000100",
    "A8": "01000000010001000001000000000001",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 58,
    "A1": "01",
    "A2": "00010000000000000000000100000100",
    "A3": "01000100010000000100010000010001",
    "A4": "00000001000100010001000001000000",
    "A5": "01",
    "A6": "00010000010001000100000100000001",
    "A7": "01000100000100010001000001000100",
    "A8": "00000001000001000000010000010000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 59,
    "A1": null,
    "A2": "00000100000100000001000000000001",
    "A3": "00010000010001000100010001000000",
    "A4": "01000001000000010000000100010001",
    "A5": null,
    "A6": "00010000000100000000010001000100",
    "A7": "01000100010001010001000100010000",
    "A8": "00000001000000000100000000000100",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 60,
    "A1": null,
    "A2": "00010000000000000000000100000100",
    "A3": "01000100010000000100010000010001",
    "A4": "00000001000100010001000001000000",
    "A5": null,
    "A6": "00010000010001000100000100000001",
    "A7": "01000100000100010001000001000100",
    "A8": "00000001000001000000010000010000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 61,
    "A1": null,
    "A2": "00000100000100000100000000000100",
    "A3": "00010000010000010001000100010000",
    "A4": "01000001000001000000010001000100",
    "A5": null,
    "A6": "00010000000100000001000000010001",
    "A7": "0101010101010100",
    "A8": "00000001000000010000000100000001",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 62,
    "A1": null,
    "A2": "00010000010000000100000100000000",
    "A3": "01000100000100010001000001000100",
    "A4": "00000001000001000000010000010001",
    "A5": null,
    "A6": "00010000000100010000000100000100",
    "A7": "01000100010001000100010000010001",
    "A8": "00000001000000000001000001000000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 63,
    "A1": null,
    "A2": "00010000000100010000010001000000",
    "A3": "00000100010001000001000100010001",
    "A4": "00000001000000000100000000000001",
    "A5": null,
    "A6": "01000000000001000000000100000100",
    "A7": "00010001000100000100010001000100",
    "A8": "01000100010000010001000000010000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 64,
    "A1": null,
    "A2": "01000001000001000100000100000100",
    "A3": "00010000010000000001000001000001",
    "A4": "00000100000100010000010000010000",
    "A5": null,
    "A6": "01000001000001000100000100000100",
    "A7": "00010000010000000001000001000001",
    "A8": "00000100000100010000010000010000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 65,
    "A1": null,
    "A2": "00000100000100010000010001000000",
    "A3": "00010000010000000001000100010000",
    "A4": "01000001000001000100000001000100",
    "A5": null,
    "A6": "00000100000100010000010000010001",
    "A7": "00010000010000000001000100000100",
    "A8": "01000001000001000100000000000001",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 66,
    "A1": "00000000000000000100000100000100",
    "A2": "01000001000000010000000000000000",
    "A3": "00010000010001000000010000010001",
    "A4": "00000100000100000001000001000000",
    "A5": "01000001000001000000000000000000",
    "A6": "00010000010000000000010000010001",
    "A7": "00000100000100010001000001000100",
    "A8": "00000000000000000100000100000000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 67,
    "A1": "00000000000000000100000100000000",
    "A2": "00000100000100000001000001000001",
    "A3": "00010000010001000000000000000000",
    "A4": "01000001000000010000010000010001",
    "A5": "01000001000001010000000000000000",
    "A6": "00000100000100000001000001000100",
    "A7": "00000000000000000000010000010000",
    "A8": "00010000010000000100000100000100",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 68,
    "A1": "00000000000000000100000100000100",
    "A2": "00010001000000010000000000000000",
    "A3": "01000000010001000000010000010001",
    "A4": "00000100000100000001000001000000",
    "A5": "01000001000001000000000000000000",
    "A6": "00010000010000000000010000010001",
    "A7": "00000100000100010001000001000100",
    "A8": "00000000000000000100000100000000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 69,
    "A1": "00000000000000000100000100000000",
    "A2": "00000100000100000001000001000001",
    "A3": "00010000010000010000000000000000",
    "A4": "01000001000001000000010000010001",
    "A5": "01000001000001000000000000000000",
    "A6": "00000100000100000001000001000100",
    "A7": "00000000000000010000010000010000",
    "A8": "00010000010000000100000100000100",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 70,
    "A1": "00000001000000000100000000000100",
    "A2": "00000000010000010001000001000000",
    "A3": "01000100000001000000010000010000",
    "A4": "00010000000100000000000100000001",
    "A5": "01000000000001000000000100000000",
    "A6": "00000001000000000100000001000000",
    "A7": "00000100010000010000010000010001",
    "A8": "00010000000100000001000000000100",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 71,
    "A1": "00000001000000000100000000000000",
    "A2": "00010000000001000000010000010000",
    "A3": "01000100000100010001000001000100",
    "A4": "00000000010000000000000100000100",
    "A5": "01000000000001000000000100000000",
    "A6": "00000100000100000001000000000001",
    "A7": "00010000010000010000010000010001",
    "A8": "00000001000000000100000001000000",
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 72,
    "A1": "01000001000001000100000100000100",
    "A2": null,
    "A3": "01000100010001000001000100010000",
    "A4": "00010000000100010000010001000001",
    "A5": "01000001000001000100000100000100",
    "A6": "00000100010000010001000000010001",
    "A7": "00010001000100000100010001000100",
    "A8": null,
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  },
  {
    "No": 73,
    "A1": null,
    "A2": "01000001000001000100000001000000",
    "A3": "00010000010000000001000000010000",
    "A4": "00000100000100010000010001000100",
    "A5": null,
    "A6": "00000000000000000000000100010001",
    "A7": "0000000001010001",
    "A8": "00000000000000000001000000000001",
    "L1": "01000000000000010000000000000000",
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": "01000000000000010000000000000000"
  },
  {
    "No": 74,
    "A1": null,
    "A2": "01",
    "A3": null,
    "A4": "01",
    "A5": "01",
    "A6": null,
    "A7": "01",
    "A8": null,
    "L1": null,
    "L2": null,
    "L3": null,
    "L4": null,
    "L5": null,
    "L6": null,
    "L7": null,
    "L8": null,
    "S1": null,
    "S2": null
  }
]