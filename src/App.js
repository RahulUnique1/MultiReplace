import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    
    state = {
        inputText: '',
        resultText: '',
        findText: '',
        replaceText: ''
    }
    
    handleInputText = (e) => {
        this.setState({ inputText: e.target.value })
    }
    
    handleFindText = (e) => {
        this.setState({ findText: e.target.value })
    }
    
    handleReplaceText = (e) => {
        this.setState({ replaceText: e.target.value })
    }
    
    replace = () => {
        let { inputText, resultText, findText, replaceText } = this.state;
        
        let keyPairs = findText.split(',');
        let valuePairs = replaceText.split(',');
        
        let theDict = {};
        
        for(var i = 0; i < keyPairs.length; i++) {
            theDict[keyPairs[i]] = valuePairs[i];
        }
        
        let regexString = keyPairs.join('|');
        let re = new RegExp(regexString, 'gim');
        resultText = inputText.replace(re, (match) => theDict[match]);
        
        this.setState({ resultText })
    }
    
    render () {
        
        let { inputText, resultText, findText, replaceText } = this.state;
        
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              
              <textarea 
                rows={10} 
                cols={50}
                style={{
                    borderRadius: 4,
                }}
                value={inputText}
                onChange={this.handleInputText}
              >
                
              </textarea>
              
              
              <div
                style={{
                    fontSize: 12,
                    display: 'flex',
                    alignItems: 'center'
                }}
              >
                  <label> Find: </label>
                  <input  
                    value={findText}
                    onChange={this.handleFindText}
                    style={{
                        margin: 5,
                        borderRadius: 4
                    }}
                  />
              </div>
              
             
              <div
                style={{
                    fontSize: 12,
                    display: 'flex',
                    alignItems: 'center'
                }}
              >
                  <label> Replace: </label>
                  <input  
                    value={replaceText}
                    onChange={this.handleReplaceText}
                    style={{
                        margin: 5,
                        borderRadius: 4
                    }}
                  />
              </div>
              
              
              <button
                onClick={this.replace}
                style={{
                    margin: 5
                }}
              >
                Replace
              </button>
              
              <textarea 
                rows={10} 
                cols={50}
                style={{
                    borderRadius: 4,
                }}
                value={resultText}
              >
                
              </textarea>
              
            </header>
            
          </div>
        );
    }
}

export default App;
