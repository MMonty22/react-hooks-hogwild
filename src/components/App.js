import React, {useState} from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles"
import hogs from "../porkers_data";

function App() {
	const [showGreased, setShowGreased] = useState(false)
	const [isSortedByName, setisSortedByName] = useState(false)
	const [isSortedByWeight, setisSortedByWeight] = useState(false)

	const greasedHogs = hogs.filter((hog) => (showGreased ? hog.greased : true))	

	const sortByProperty = (array, propertyName) => {
		return array.sort((a,b) => {
			if (a[propertyName] > b[propertyName]) {
				return 1;
			}
			if (a[propertyName] < b[propertyName]) {
				return -1;
			}
			return 0;
		})
	}
	
	const sortedHogs = () => {
		if (isSortedByName) {
			 return sortByProperty(greasedHogs, "name")
		}
		if (isSortedByWeight) {
			return sortByProperty(greasedHogs, "weight")
		}
		return greasedHogs
	}

	const setSortByName = () => {
		setisSortedByName(!isSortedByName)
		setisSortedByWeight(false)
	}

	const setSortByWeight = () => {
		setisSortedByWeight(!isSortedByWeight)
		setisSortedByName(false)
	}

	return (
		<div className="App">
			<Nav />
			<HogTiles
				hogs={sortedHogs()}
				showGreased={showGreased}
				setShowGreased={setShowGreased}
				setSortNames={setSortByName}
				setSortWeights={setSortByWeight}
			/>
		</div>
	);
}

export default App;
