const getArea = () => {
  let lastValidPoint = 698; //Robot will meet first barrier at 699 on every axis in every plane
  let validStep, gridValidSteps, finalValidSteps, totalValidSteps = 0;//initialize variables  
  
  for(validStep = lastValidPoint; validStep >= 0; validStep--){
    totalValidSteps += validStep //this will reduce all valid steps in one quadrant(Q1)
  }  
  
  gridValidSteps = totalValidSteps * 4;//since cartesian grids have 4 quadrants
  finalValidSteps = gridValidSteps + 1 ;//to account for (0,0)
  
  return finalValidSteps;
}

document.getElementById('result').innerText = getArea();