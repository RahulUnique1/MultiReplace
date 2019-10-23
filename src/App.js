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
            let key = keyPairs[i] ? keyPairs[i].toLowerCase() : '';
            theDict[key] = valuePairs[i];
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
              <div
                style={{
                    color: 'yellow',
                    position: 'fixed',
                    top: 20,
                    textDecoration: 'underline'
                }}
              >
                Multi Replacer
              </div>
              
              <div
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
              >
                  <label
                    style={{
                        fontSize: 12,
                        marginBottom: 5
                    }}
                  >
                    Enter your text here:
                  </label>
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
              </div>
              
              <div
                style={{
                    fontSize: 12,
                    display: 'flex',
                    alignItems: 'center'
                }}
              >
                  <label> Find <span style={{ fontSize: 9 }}>(Comma separated texts)</span>: </label>
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
                  <label> Replace <span style={{ fontSize: 9 }}>(Corresponding Comma separated texts)</span>: </label>
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
                onClick={ inputText && findText && replaceText ? this.replace : undefined }
                style={{
                    margin: 5
                }}
              >
                Replace
              </button>
              
              <div
                style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}
              >
                <label
                    style={{
                        fontSize: 12,
                        marginBottom: 5
                    }}
                >
                    Your result here:
                </label>
                <textarea 
                  rows={10} 
                  cols={50}
                  style={{
                      borderRadius: 4,
                  }}
                  value={resultText}
                >
                  
                </textarea>
              </div>
              
              
            </header>
            
          </div>
        );
    }
}

export default App;
