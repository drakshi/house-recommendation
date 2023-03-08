import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import { minDistance } from "../utils/calculateDistance.js";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import "./Grid.css";

const Grid = ({ rows, cols }) => {
  console.log(rows);
  const [grid, setGrid] = useState(
    new Array(rows).fill(null).map(() => new Array(cols).fill(""))
  );
  useEffect(() => {
    setGrid(new Array(rows).fill(null).map(() => new Array(cols).fill(""))
    )
  }, [rows, cols])
  const [houseLocations, setHouseLocations] = useState([]);
  const [resourcesLocations, setResourcesLocations] = useState([]);
  const [bestHouseLocation, setBestHouseLocation] = useState([]);
  const setOption = (row, col, option) => {
    const newGrid = [...grid];
    newGrid[row][col] = option;
    setGrid(newGrid);
  };

  const handleRecommend = () => {
    let bestHouse = null;
    let bestHouseScore = null;
    houseLocations?.map((houseLocation) => {
      let houseScore = null;
      resourcesLocations?.map((resourcesLocation) => {
        let grid = [
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
          ["", "", "", "", ""],
        ];
        grid[houseLocation[0]][houseLocation[1]] = "s";
        grid[resourcesLocation[0]][resourcesLocation[1]] = "d";
        const score = minDistance(grid, rows, cols);
        console.log(score);
        houseScore += score;
      });
      if (bestHouseScore) {
        if (houseScore < bestHouseScore) {
          bestHouseScore = houseScore;
          bestHouse = houseLocation;
        }
      } else {
        bestHouseScore = houseScore;
        bestHouse = houseLocation;
      }
    });
    setBestHouseLocation(bestHouse);
    console.log(bestHouseLocation);
  };

  return (
    <div>
      <table>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row?.map((option, colIndex) => (
                <td key={colIndex}>
                  <Cell
                    row={rowIndex}
                    col={colIndex}
                    option={option}
                    setOption={setOption}
                    houseLocations={houseLocations}
                    setHouseLocations={setHouseLocations}
                    resourcesLocations={resourcesLocations}
                    setResourcesLocations={setResourcesLocations}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-recommend">
        <Button
          variant="contained"
          style={{ backgroundColor: "darkolivegreen" }}
          onClick={handleRecommend}
        >
          Recommend

        </Button>
      </div>

      {bestHouseLocation.length != 0 && (
        <div className="button-recommend">
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            <strong>
              {`House at row ${bestHouseLocation[0] + 1} and col ${bestHouseLocation[1] + 1} is a good option.`}
            </strong>
          </Alert>
        </div>
      )}
    </div>
  );
};
export default Grid;
