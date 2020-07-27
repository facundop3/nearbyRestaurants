import React from "react";
import { isValidEmail, parseCoordinates, sortByratingScore } from "./utils";
describe("isValidEmail", () => {
  test("Valid email provided", () => {
    const emailSample = "hello@gmail.com";
    expect(isValidEmail(emailSample)).toBe(true);
  });
  test("Invalid email provided", () => {
    const emailSample = "hellogmail.com";
    expect(isValidEmail(emailSample)).toBe(false);
  });
});

describe("parseCoordinates", () => {
  test("Parse coordinates", () => {
    const sampleCoords = "123,456";
    const control = { lat: 123, lng: 456 };
    expect(parseCoordinates(sampleCoords)).toMatchObject(control);
  });
});

describe("sortByratingScore", () => {
  test("sortByratingScore", () => {
    const sampleRestaurants = [
      { ratingScore: "1", name: "one", opened: 1 },
      { ratingScore: "2", name: "two", opened: 1 },
      { ratingScore: "3", name: "three", opened: 1 },
      { ratingScore: "4", name: "four", opened: 1 },
    ];

    expect(sortByratingScore([...sampleRestaurants])).toMatchObject(
      sampleRestaurants.reverse()
    );
  });
});
