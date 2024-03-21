// Created by: Fetuha
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateAreaOfTriangle() {
  // input
  const baseOfTriangle = parseInt(document.getElementById('base-of-triangle').value)
  const heightOfTriangle = parseInt(document.getElementById('height-of-rectangle').value)

  // process
  const baseOfTriangle = baseOfTriangle * heightOfTriangle
  const heightOfTriangle = (baseOfTriangle * heightOfTriangle) * 0.5

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfTriangle + ' cm²'
}