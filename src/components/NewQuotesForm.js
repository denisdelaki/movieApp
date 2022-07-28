import React, { useState } from "react";
function NewQuotesForm({onAddQuote}) {
    const [formData, setFormData] = useState({
        movie: "",
        star: "",
        url:""
    })
    function handleChanges(e) {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:8004/quotes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            movie: formData.movie,
            star: formData.star,
            url: formData.url,
          }),
        })
          .then((res) => res.json())
          .then((quotes) => {
            onAddQuote(quotes);
            setFormData({ ...formData, movie: "", star: "", url: "" });
          });
        
    }
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="movie"
          placeholder="Movie Title"
          onChange={handleChanges}
          value={formData.movie}
        ></input>
        <input
          type="text"
          name="star"
          placeholder="Movie Star"
          onChange={handleChanges}
          value={formData.star}
        ></input>
        <input
          type="text"
          name="url"
          placeholder="Quote Url"
          onChange={handleChanges}
          value={formData.url}
            ></input>
            <input
                type="submit"
                value="Post Quote"
            ></input>
      </form>
    ); 
}
export default NewQuotesForm