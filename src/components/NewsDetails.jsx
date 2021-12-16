import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import api from '../services/api'

import './NewsDetails.css'

function NewsDetails() {
	let params = useParams()

	const [noticia, setNoticia] = useState([])

	useEffect(() => {
		api
			.get(`/noticias/visualizar?id=${params.idNoticia}`)
			.then(async response => {
				let {data, ...rest} = setNoticia(response.data)
				data = await formatDate(data)
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})
	}, [])

return (
		<article>
			<div className="noticia-container">
      <div className="title-noticia">
      <div>
        	<span className="author-noticia">{noticia.autor}</span></div>	
					<div><h2><b>{noticia.titulo}</b></h2></div>
      </div>
			<div className="text">{noticia.descricao}</div>
      <div className="text-conteudo">{noticia.conteudo}</div>

      </div>
		</article>
	)
}

export default NewsDetails;