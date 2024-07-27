import {Component} from 'react'
import './index.css'
import SuggestionItems from '../SuggestionItem'
class GoogleSuggestion extends Component{
    state = {
        searchInput: '',
      }
      updateSearchInput = value => {
        this.setState({
          searchInput: value,
        })
      }
      onChangeSearchInput = event => {
        this.setState({
          searchInput: event.target.value,
        })
      }
    
   
    render(){
        const {suggestionsList} = this.props
        const {searchInput} = this.state
        console.log(searchInput)
        
        const searchResults = suggestionsList.filter(eachSuggestion =>
          eachSuggestion.suggestion
            .toLowerCase()
            .includes(searchInput.toLowerCase()),
        )

        return(
            <div className='app-container'>
                <div className='google-suggestions-container'>
                    <img className='google-logo' src='https://assets.ccbp.in/frontend/react-js/google-logo.png ' alt='pic'/>
                    <div className='search-input-suggestions-container'>
                        <div className='search-input-container'>
                            <img className='search-icon' src='https://assets.ccbp.in/frontend/react-js/google-search-icon.png' alt='pic'/>
                            <input placeholder='Enter the Text!' className='search-input' onChange={this.onChangeSearchInput} type="search" value={searchInput} />

                        </div>
                        <ul className='suggestions-list'>
                            {searchResults.map(each=>(
                                <SuggestionItems  suggestionDetails={each} key={each.id}  updateSearchInput={this.updateSearchInput} />
                            ))}

                        </ul>
                    </div>
                

                </div>



            </div>
        )
    }
}
export default GoogleSuggestion