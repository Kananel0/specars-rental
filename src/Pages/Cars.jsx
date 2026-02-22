import React, { useState } from "react";
import cardata from "../Cars.json";
import { Link } from "react-router-dom";

function Cars() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedPickup, setSelectedPickup] = useState([]);
    const [selectedDropoff, setSelectedDropoff] = useState([]);

    // Extract unique categories, pickup, dropoff dynamically
    const categories = [...new Set(cardata.map((car) => car.type))];
    const pickupLocations = ["Abu Dhabi", "Alain", "Dubai", "Sharjah"];
    const dropoffLocations = ["Abu Dhabi", "Alain", "Dubai", "Sharjah"];

    // Handle checkbox changes
    const handleCheckboxChange = (value, state, setState) => {
        if (state.includes(value)) {
            setState(state.filter((item) => item !== value));
        } else {
            setState([...state, value]);
        }
    };

    // Filter cars
    const filteredCars = cardata.filter((car) => {
        const matchesSearch =
            car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            car.type.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategories.length === 0 || selectedCategories.includes(car.type);

        const matchesPickup =
            selectedPickup.length === 0 || selectedPickup.some((loc) => car.pickup === loc);

        const matchesDropoff =
            selectedDropoff.length === 0 || selectedDropoff.some((loc) => car.dropoff === loc);

        return matchesSearch && matchesCategory && matchesPickup && matchesDropoff;
    });

    return (
        <>
            <div className="banner-section flex justify-center items-center h-[350px] lg:h-[550px]">
                <div className="banner-section-content text-center z-10">
                    <h6 className="uppercase text-sm lg:text-xl text-white font-bricolage">
                        - Ridelux
                    </h6>
                    <h1 className="text-4xl lg:text-5xl xl:text-8xl font-semibold font-bricolage text-red-600">
                        <span className="text-white font-bricolage">Select </span> Luxury Car
                    </h1>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-8 px-4 sm:px-6 md:px-8 lg:px-[12%] xl:px-[12%] py-12">
                {/* Sidebar Filters */}
                <div className="w-full sticky top-0 md:w-[300px] bg-[#1e1f22] rounded-2xl p-6 shadow-lg animate-side-left h-full">
                    {/* Search */}
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Search cars..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg bg-[#121212] text-white border border-gray-600 outline-none"
                        />
                    </div>

                    {/* Categories */}
                    <div className="mb-6">
                        <h4 className="font-semibold text-white font-bricolage text-2xl mb-3">
                            Categories
                        </h4>
                        <ul className="text-md space-y-2 text-gray-400">
                            {categories.map((cat) => (
                                <li key={cat} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(cat)}
                                        onChange={() =>
                                            handleCheckboxChange(cat, selectedCategories, setSelectedCategories)
                                        }
                                    />
                                    <span className="hover:text-white transition-colors duration-300">
                                        {cat}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pickup */}
                    <div className="mb-6">
                        <h4 className="font-semibold text-white font-bricolage text-2xl mb-3">
                            Pickup Locations
                        </h4>
                        <ul className="text-md space-y-2 text-gray-400">
                            {pickupLocations.map((loc) => (
                                <li key={loc} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedPickup.includes(loc)}
                                        onChange={() =>
                                            handleCheckboxChange(loc, selectedPickup, setSelectedPickup)
                                        }
                                    />
                                    <span className="hover:text-white transition-colors duration-300">
                                        {loc}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Dropoff */}
                    <div className="mb-6">
                        <h4 className="font-semibold text-white font-bricolage text-2xl mb-3">
                            Dropoff Locations
                        </h4>
                        <ul className="text-md space-y-2 text-gray-400">
                            {dropoffLocations.map((loc) => (
                                <li key={loc} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedDropoff.includes(loc)}
                                        onChange={() =>
                                            handleCheckboxChange(loc, selectedDropoff, setSelectedDropoff)
                                        }
                                    />
                                    <span className="hover:text-white transition-colors duration-300">
                                        {loc}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Cars Listing */}
                <div className="flex-1 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredCars.length > 0 ? (
                            filteredCars.map((car) => (
                                <div key={car.id} className="car-item group bg-[#1e1f22] relative w-full">
                                    <div className="car-image w-full relative h-[250px] overflow-hidden">
                                        <img
                                            src={car.image}
                                            alt={car.name}
                                            className="w-full h-full object-contain md:object-cover object-center group-hover:scale-110 transition-all duration-300"
                                        />
                                        <div className="car-info absolute bottom-0 p-5 left-0 z-10">
                                            <h4 className="text-2xl md:text-3xl font-bricolage text-white font-semibold">
                                                {car.name}
                                            </h4>
                                            <span className="text-red-100 font-bricolage text-xl">
                                                {car.type}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="car-content p-5 py-10 relative">
                                        <ul className="flex gap-3 justify-between items-center flex-wrap">
                                            <li className="text-gray-300 text-lg md:text-xl">
                                                <i className="fa-regular fa-user text-[#e8021f] pe-2"></i>
                                                {car.seats}
                                            </li>
                                            <li className="text-gray-300 text-lg md:text-xl">
                                                <i className="ri-steering-line text-[#e8021f] pe-2"></i>
                                                {car.transmission}
                                            </li>
                                            <li className="text-gray-300 text-lg md:text-xl">
                                                <i className="ri-timer-line text-[#e8021f] pe-2"></i>
                                                {car.speed}
                                            </li>
                                        </ul>

                                        <div className="flex justify-between items-center mt-12">
                                            <h4 className="text-2xl md:text-4xl font-bold font-bricolage text-white">
                                                $ {car.price}/day
                                            </h4>
                                            <Link to={`/car/${car.id}`}>
                                                <button className="text-white bg-red-600 px-5 py-3 text-lg md:text-xl rounded-full cursor-pointer">
                                                    Book Now
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-white text-xl">No cars found</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cars;
