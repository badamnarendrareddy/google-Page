import './index.css'
const SuggestionItems=(props)=>{
    const  {suggestionDetails,updateSearchInput}=props
    const {suggestion}=suggestionDetails
    const onClickSuggestion = () => {
        updateSearchInput(suggestion)
       
      }

    return(
        <li className="suggestion-item">
            <p className="suggestion-text">{suggestion}</p>
            <button className='arrow-button '>
            <img className='arrow' src='https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png' alt='pic'  onClick={onClickSuggestion}/>
            </button>
            

        </li>
    )
}
export default SuggestionItems