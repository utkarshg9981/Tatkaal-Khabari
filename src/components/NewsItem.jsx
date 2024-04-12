import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import News from '../assets/news.jpg'

function NewsItem({title,description,src,url}) {
  return (
    

    <Card className='bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2 ' style={{ width : '345px'   }}>
      <Card.Img variant="top" style={{height: '200px', width: '325px'}} src={src?src:News } />
      <Card.Body>
        <Card.Title>{title.slice(0,50)}</Card.Title>
        <Card.Text>
         {description ? description.slice(0,90) : "this is a description of this news"}
        </Card.Text>
        <a href={url} target="_blank" rel="noopener noreferrer">

        <Button variant="primary">Go somewhere</Button>
        </a>
      </Card.Body>
    </Card>

  );
}

export default NewsItem;