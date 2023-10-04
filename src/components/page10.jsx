/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    AppBar,
    Box,
    Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SpeedIcon from '@mui/icons-material/Speed';
import DriveEtaIcon from '@mui/icons-material/DriveEta';

export default function page1() {
    const [searchinput, setSearchInput] = useState("");
    const [carCard] = useState({
        imageUrl: [
            "fortuner.png",
            "thar.png",
        ],
        carName: [
            "Fortuner",
            "Thar",
        ],
        modelYear: [2021, 2019],
        seater: ["4 People", "4 People"],
        fuel: ["Hybrid", "Gasoline"],
        average: ["6.1km/1-litre", "8.2km/1-litre"],
        control: ["Automatic", "Automatic"],
        cost: ["$440", "$350"]
    });

    const filteredCars = carCard.imageUrl.reduce((filtered, imageUrl, index) => {
        const carName = carCard.carName[index];
        if (carName.toLowerCase().includes(searchinput.toLowerCase())) {
            filtered.push({
                imageUrl,
                carName,
                modelYear: carCard.modelYear[index],
                seater: carCard.seater[index],
                fuel: carCard.fuel[index],
                average: carCard.average[index],
                control: carCard.control[index],
                cost: carCard.cost[index],
            });
        }
        return filtered;
    }, []);

    const textColor = {
        color: "#505d76",
        fontWeight: "550",
        background: "none",
    };

    return (
        <>
            {/* For navigation bar */}
            <Box sx={{ flexGrow: 1 }} className="mx-4">
                <AppBar
                    position="static"
                    sx={{ backgroundColor: "#f2f6fd" }}
                    className="rounded-4"
                >
                    <Toolbar>
                        <input
                            type="text"
                            placeholder="Search"
                            className="rounded-4 p-2"
                            style={{ border: "none" }}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <i
                            className="fa fa-search text-black"
                            aria-hidden="true"
                            style={{ marginLeft: "-2.3%" }}
                        ></i>
                        <select style={textColor} className="ms-5 border-0">
                            <option>Relevance</option>
                        </select>
                        <select style={textColor} className="ms-5 border-0">
                            <option>All Brands</option>
                        </select>
                    </Toolbar>
                </AppBar>
            </Box>

            {/* for Car cards */}

            <div className="mt-5 mx-4">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {filteredCars.map((car, index) => (
                        <div key={index} className="col">
                            <Card
                                sx={{
                                    maxWidth: 500,
                                    padding: 1,
                                    borderRadius: 3,
                                    marginRight: 2,
                                    marginLeft: 2,
                                    backgroundColor: "#f2f6fd",
                                    color: "#",
                                }}
                                className="border border-light"
                            >
                                <CardMedia
                                    sx={{ height: 190, borderRadius: 3 }}
                                    image={require(`../assets/${car.imageUrl}`)}
                                    title="Car"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {car.carName}<span className="rounded-4  float-end p-2 fs-6" style={{border: '1px dashed #499aee'}}>{car.modelYear}</span>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <div class="row mt-4">
                                            <div class="col-sm-5 col-md-6" style={textColor}>
                                                <PeopleOutlineIcon style={{ color: "#499aee" }} className="me-2" />{car.seater}
                                            </div>
                                            <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0" style={textColor}>
                                                <LocalGasStationIcon style={{ color: "#499aee" }} className="me-2" />{car.fuel}
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-sm-5 col-md-6" style={textColor}>
                                                <SpeedIcon style={{ color: "#499aee" }} className="me-2" />{car.average}
                                            </div>
                                            <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"  style={textColor}>
                                                <DriveEtaIcon style={{ color: "#499aee" }} className="me-2" />{car.control}
                                            </div>
                                        </div>
                                    </Typography>
                                </CardContent>
                                <hr />

                                <div className="row">
                                    <div
                                        className="col-sm-5 col-md-6 text-dark pt-1"
                                        style={textColor}
                                    >
                                        <p>
                                            <span className="fs-3">{car.cost}</span>/month
                                        </p>
                                    </div>
                                    <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0 mt-2">
                                        <button
                                            className="border-0"
                                            style={{ background: "none" }}
                                        >
                                            <i
                                                className="fa fa-heart-o fs-4 p-2 rounded-4 me-3"
                                                style={{ color: "#85bff3", backgroundColor: "#dbeafb" }}
                                                aria-hidden="true"
                                            ></i>
                                        </button>
                                        <button
                                            style={{ backgroundColor: "#489bed", marginTop: "-1%" }}
                                            className="border-0 rounded-4 text-light p-2"
                                        >
                                            Rent Now
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            {/* For pagination */}
            <div>
                <Box sx={{ flexGrow: 1 }} className="mx-4 mt-5 mb-3">
                    <AppBar
                        position="static"
                        sx={{ backgroundColor: "#f2f6fd" }}
                        className="rounded-4"
                    >
                        <div className="row">
                            <div
                                className="col-sm-5 col-md-6 text-dark mt-3 ps-5 pt-1"
                                style={textColor}
                            >
                                {filteredCars.length} from 129
                            </div>
                            <Toolbar className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                                <nav className="mt-3 ms-5 ps-5">
                                    <ul className="pagination" style={{ color: "#4f5b72" }}>
                                        <li className="page-item">
                                            <Link
                                                className="page-link rounded border-0 shadow"
                                                tabIndex="-1"
                                                style={textColor}
                                                to="/9"
                                            >
                                                &larr;
                                            </Link>
                                        </li>
                                        <li className="page-item ms-1">
                                            <Link
                                                className="page-link rounded border-0 shadow"
                                                to="/"
                                                style={textColor}
                                            >
                                                1
                                            </Link>
                                        </li>
                                        <li className="page-item ms-1">
                                            <Link
                                                className="page-link rounded border-0 shadow"
                                                style={textColor}
                                                to="/2"
                                            >
                                                2
                                            </Link>
                                        </li>
                                        <li className="page-item ms-1">
                                            <Link
                                                className="page-link rounded border-0 shadow"
                                                style={textColor}
                                                to="/3"
                                            >
                                                3
                                            </Link>
                                        </li>
                                        <li className="page-item ms-1">
                                            <Link
                                                className="page-link rounded border-0 shadow"
                                                style={textColor}
                                                to="/4"
                                            >
                                                4
                                            </Link>
                                        </li>
                                        <li className="page-item ms-1">
                                            <Link
                                                className="page-link rounded border-0 shadow"
                                                style={textColor}
                                                to="/5"
                                            >
                                                5
                                            </Link>
                                        </li>
                                        <li className="page-item ms-1">
                                            <Link
                                                className="page-link rounded border-0 shadow"
                                                style={textColor}
                                                to="/6"
                                            >
                                                6
                                            </Link>
                                        </li>
                                        <li className="page-item ms-1">
                                            <Link
                                                className="page-link rounded border-0 shadow"
                                                style={textColor}
                                                to="/7"
                                            >
                                                7
                                            </Link>
                                        </li>
                                        <li className="page-item ms-1">
                                            <Link
                                                className="page-link rounded border-0 shadow"
                                                style={textColor}
                                                to="/8"
                                            >
                                                8
                                            </Link>
                                        </li>
                                        <li className="page-item ms-1 me-1">
                                            <Link
                                                className="page-link rounded border-0 shadow"
                                                style={textColor}
                                                to="/9"
                                            >
                                                9
                                            </Link>
                                        </li>
                                        <li className="page-item me-1">
                                            <Link
                                                className="page-link rounded border-0 shadow"
                                                style={textColor}
                                                to="/10"
                                            >
                                                10
                                            </Link>
                                        </li>
                                        <li className="page-item disabled">
                                            <Link
                                                className="page-link rounded border-0 shadow"
                                                style={textColor}
                                                
                                            >
                                                &rarr;
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </Toolbar>
                        </div>
                    </AppBar>
                </Box>
            </div>
        </>
    );
}
