import React from "react";
import { useNavigate } from "react-router-dom";
import "../static/css/Groceries.css";
import {
  Grid,
  Stack,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";

const Groceries = () => {
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const onClick = async (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  return (
    <Grid container className="groceries-container">
      <Grid container marginLeft="50px" xs>
        <Grid item xs={10} style={{ fontSize: "40px", fontWeight: "bold" }}>
          Groceries
        </Grid>
        <Grid item container xs={2} justifyContent="flex-end" direction="row">
          <Grid item xs={6}>
            <text>Your total is: </text>
            <text
              style={{
                display: "inline-block",
                color: "#bb8be7",
                marginLeft: 5,
              }}
            >
              {" "}
              CAD 9.75$
            </text>
          </Grid>
          <Grid item xs={6}>
            <button
              className="groceries-submit-btn"
              type="submit"
              onClick={onClick}
            >
              Pay Online
            </button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs>
        <Grid item xs={12} className="groceries-categories">
          Produce
        </Grid>
        <Grid
          className="groceries-list"
          container
          item
          justifyContent="space-between"
          style={{ marginLeft: "20px" }}
        >
          <Grid item xs={10}>
            <FormControlLabel control={<Checkbox />} label="bean sprouts" />
          </Grid>
          <Grid item xs={2}>
            4 cups
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "50px" }}>
          <hr
            style={{
              flex: 1,
              height: "1px",
              color: "black",
              borderColor: "black",
              width: "5000px",
            }}
          />
        </Grid>
        <Grid
          container
          item
          justifyContent="space-between"
          style={{ marginLeft: "20px" }}
        >
          <Grid item xs={10}>
            <FormControlLabel control={<Checkbox />} label="corn" />
          </Grid>
          <Grid item xs={2}>
            2
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "50px" }}>
          <hr
            style={{
              flex: 1,
              height: "1px",
              color: "black",
              borderColor: "black",
              width: "5000px",
            }}
          />
        </Grid>
        <Grid
          container
          item
          justifyContent="space-between"
          style={{ marginLeft: "20px" }}
        >
          <Grid item xs={10}>
            <FormControlLabel control={<Checkbox />} label="garlic" />
          </Grid>
          <Grid item xs={2}>
            2 cloves
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "50px" }}>
          <hr
            style={{
              flex: 1,
              height: "1px",
              color: "black",
              borderColor: "black",
              width: "5000px",
            }}
          />
        </Grid>
        <Grid
          container
          item
          justifyContent="space-between"
          style={{ marginLeft: "20px" }}
        >
          <Grid item xs={10}>
            <FormControlLabel control={<Checkbox />} label="onions" />
          </Grid>
          <Grid item xs={2}>
            1/2
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "50px" }}>
          <hr
            style={{
              flex: 1,
              height: "1px",
              color: "black",
              borderColor: "black",
              width: "5000px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          className="groceries-categories"
          style={{ marginTop: "4rem" }}
        >
          Dairy, Cheese & Eggs
        </Grid>
        <Grid
          container
          item
          justifyContent="space-between"
          style={{ marginLeft: "20px" }}
        >
          <Grid item xs={10}>
            <FormControlLabel control={<Checkbox />} label="eggs" />
          </Grid>
          <Grid item xs={2}>
            4
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "50px" }}>
          <hr
            style={{
              flex: 1,
              height: "1px",
              color: "black",
              borderColor: "black",
              width: "5000px",
            }}
          />
        </Grid>
        <Grid
          container
          item
          justifyContent="space-between"
          style={{ marginLeft: "20px" }}
        >
          <Grid item xs={10}>
            <FormControlLabel control={<Checkbox />} label="milk" />
          </Grid>
          <Grid item xs={2}>
            1 cup
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "50px" }}>
          <hr
            style={{
              flex: 1,
              height: "1px",
              color: "black",
              borderColor: "black",
              width: "5000px",
            }}
          />
        </Grid>
        <Grid
          container
          item
          justifyContent="space-between"
          style={{ marginLeft: "20px" }}
        >
          <Grid item xs={10}>
            <FormControlLabel control={<Checkbox />} label="swiss cheese" />
          </Grid>
          <Grid item xs={2}>
            2 cups
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "50px" }}>
          <hr
            style={{
              flex: 1,
              height: "1px",
              color: "black",
              borderColor: "black",
              width: "5000px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          className="groceries-categories"
          style={{ marginTop: "4rem" }}
        >
          Meats
        </Grid>
        <Grid
          container
          item
          justifyContent="space-between"
          style={{ marginLeft: "20px" }}
        >
          <Grid item xs={10}>
            <FormControlLabel control={<Checkbox />} label="beef" />
          </Grid>
          <Grid item xs={2}>
            15g
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "50px" }}>
          <hr
            style={{
              flex: 1,
              height: "1px",
              color: "black",
              borderColor: "black",
              width: "5000px",
            }}
          />
        </Grid>
        <Grid
          container
          item
          justifyContent="space-between"
          style={{ marginLeft: "20px" }}
        >
          <Grid item xs={10}>
            <FormControlLabel control={<Checkbox />} label="chicken" />
          </Grid>
          <Grid item xs={2}>
            20g
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "50px" }}>
          <hr
            style={{
              flex: 1,
              height: "1px",
              color: "black",
              borderColor: "black",
              width: "5000px",
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          className="groceries-categories"
          style={{ marginTop: "4rem" }}
        >
          Baking & Spices
        </Grid>
        <Grid
          container
          item
          justifyContent="space-between"
          style={{ marginLeft: "20px" }}
        >
          <Grid item xs={10}>
            <FormControlLabel control={<Checkbox />} label="black pepper" />
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "50px" }}>
          <hr
            style={{
              flex: 1,
              height: "1px",
              color: "black",
              borderColor: "black",
              width: "5000px",
            }}
          />
        </Grid>
        <Grid
          container
          item
          justifyContent="space-between"
          style={{ marginLeft: "20px" }}
        >
          <Grid item xs={10}>
            <FormControlLabel control={<Checkbox />} label="salt" />
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "50px" }}>
          <hr
            style={{
              flex: 1,
              height: "1px",
              color: "black",
              borderColor: "black",
              width: "5000px",
            }}
          />
        </Grid>
        <Grid
          container
          item
          justifyContent="space-between"
          style={{ marginLeft: "20px" }}
        >
          <Grid item xs={10}>
            <FormControlLabel control={<Checkbox />} label="paprika" />
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: "50px" }}>
          <hr
            style={{
              flex: 1,
              height: "1px",
              color: "black",
              borderColor: "black",
              width: "5000px",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Groceries;
