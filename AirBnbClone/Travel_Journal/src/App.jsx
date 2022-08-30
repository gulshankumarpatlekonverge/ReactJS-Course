import './App.css'
import TravelJouranal from './travelJournal';
import NavBarTravelJournal from './navBarTravelJournal'
import TravelData from './travelJournalData';
function App() {
  
  let travelData = TravelData.map(data => {
    return <TravelJouranal 
            key = {data.id}
            {...data}
          />
  })
  return (
    <div>
      <NavBarTravelJournal />
      {/* <TravelJouranal 
        location = {travelData.location}
      /> */}
      {travelData}
    </div>
  )
}

export default App
