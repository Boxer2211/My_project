import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Scrollbars } from 'react-custom-scrollbars';
import { getNameFromLocalStorage,saveNameToLocalStorage } from './FunctionForLocalStorage.js'



function App() {
  const scrollbarsRef = useRef(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  
  function sendComment (commentText) { // функція додавання коментаря
    let userLocal = getNameFromLocalStorage()
    if (!userLocal) {
      saveNameToLocalStorage()
    } else {
      const min = 100; 
      const max = 999; 
      const idRandom = Math.floor(Math.random() * (max - min + 1)) + min;
      setComments([...comments, {id:idRandom, body:commentText, user:{username:userLocal}}])
    }
  }
  
  useEffect(() => { // завантаження тексту з локального сховища
    const storedText = localStorage.getItem('text');
    if (storedText) {
      setCommentText(storedText);
    }
  }, []);

  // Збереження тексту в локальне сховище при зміні
  const handleChange = (event) => {
    const newText = event.target.value;
    setCommentText(newText);
    localStorage.setItem('text', newText);
  };


  useEffect(() => { // для того щоб скрол був внизу після підгрузки comments
    if (scrollbarsRef.current) {
      const scrollHeight = scrollbarsRef.current.getScrollHeight();
      scrollbarsRef.current.scrollToBottom();
    }
  }, [comments]); 

  useEffect(() => { //отримання comments з API
    const fetchComments = async () => {
      try {
        const response = await fetch('https://dummyjson.com/comments');
        const data = await response.json();
        setComments(data.comments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    fetchComments();
  }, []);


  const renderThumb = ({ style, ...props }) => { // функція для скролу
    const thumbStyle = {
      borderRadius: 'inherit',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const handleDeleteComment = (commentId) => { //видалення коменту
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };
  
  return (
    <div className="App">
      <div className="Comment__container">
        
            <Scrollbars
          ref={scrollbarsRef}
          autoHide
          renderThumbVertical={renderThumb}
          renderThumbHorizontal={renderThumb}
        >
            <div style={{ width: '100%', height: 'fit-content', overflowX: 'hidden' }}>
              
              {comments.map(comment => {
            return <div className="Comment__area" key={comment.id}>
                    <div className="Comment__body Body">
                      <div className="Body__user">
                        <div className="Body__userWord">
                          <p>{comment.user.username.charAt(0).toUpperCase()}</p>
                        </div>
                        <div className="Body__userName">
                          {comment.user.username}
                        </div>
                        <div className="Body__deletComment" onClick={() => handleDeleteComment(comment.id)}>
                        X
                        </div>
                      </div>
                      <div className="Body__text">
                        <p>{comment.body}</p>
                      </div>
                    </div>
                  </div>
              })}
             

            </div>
          </Scrollbars>
        <div className="Comment__textArea">
          <textarea  value={commentText} onChange={handleChange} cols="30" rows="10" placeholder='Write message'></textarea>
          <input className="textArea__button" type="button" value="Send" 
            onClick={() => sendComment(commentText)}></input>
        </div>

      </div>
    </div>
  );
}

export default App;
