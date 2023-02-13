import React from 'react';
import './gallery.scss';


const Gallery = () => {
  return (
    <div className="galleryContainer font-fontMain text-md sm:text-4xl md:text-5xl">
  <div className="galleryBox">
    <img src="https://images.unsplash.com/photo-1606490208247-b65be3d94cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"/>
    <span>Weddings</span>
  </div>
  <div className="galleryBox">
    <img src="https://images.unsplash.com/photo-1602605786056-da87eadb5126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"/>
    <span>Events</span>
  </div>
  <div className="galleryBox">
    <img src="https://images.unsplash.com/photo-1542301728776-fbf0a92c47e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
    <span>Dance</span>
  </div>
  <div className="galleryBox">
    <img src="https://images.unsplash.com/photo-1612438115954-ae5a72df09eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
    <span>Decoration</span>
  </div>
</div>
  )
}

export default Gallery