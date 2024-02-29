

const Module = ({ content }) => {
  return (
    <div className="module">
      <h2 className="module-title">{content.title}</h2>
      <div className="module-scroll-container">
        <div className="module-content-container">
          {content.content.map((item, index) => (
              <div key={index}>
              {item.type === 'text' && <p>{item.content}</p>}
              {item.type === 'image' && <img src={item.content} alt={`Image ${index}`} />}
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Module;
