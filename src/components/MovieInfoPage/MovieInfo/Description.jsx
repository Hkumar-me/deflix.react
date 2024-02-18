import React, { useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated((prev) => !prev);
  };

  const truncatedText = isTruncated ? text.slice(0, maxLength) : text;

  return (
    <div>
      <p>{truncatedText}</p>
      {text.length > maxLength && (
        <button onClick={toggleTruncate} style={{fontStyle:"italic", fontWeight:900}}>
          {isTruncated ? 'Read More...' : 'Read Less'}
        </button>
      )}
    </div>
  );
};

const Description = () => {
  const longText =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quas tempora quis distinctio vel aspernatur saepe et possimus voluptatem explicabo nulla eius adipisci eum consectetur rem minima minus, necessitatibus, sit voluptas? Vero, voluptas voluptatibus nam esse aut saepe, quae ad ut autem consectetur voluptate amet ea obcaecati error assumenda eius natus accusantium explicabo quaerat, alias inventore labore? Aut quidem beatae, unde quaerat ullam praesentium rem, doloremque consectetur eligendi animi id quos vel soluta natus aperiam repellendus accusamus aliquid quis at quibusdam libero. Voluptate in tempore voluptates! Aliquid, earum quis quidem hic enim sapiente molestiae voluptatibus quibusdam corporis ex labore tempore at ab ratione? Inventore sapiente nostrum voluptatem facere eligendi? Eos cum nobis doloremque repellendus ratione obcaecati, et architecto possimus rem esse quis, nisi exercitationem error a sed, eveniet cupiditate quibusdam aut sint delectus incidunt laboriosam unde in? Eum dignissimos, nisi id rem illo distinctio et ex dolorum praesentium, beatae, eaque molestiae dolore repellendus? Iure et ducimus quod cupiditate ipsum voluptatem eligendi quaerat deleniti rerum obcaecati, labore dolorum, sit veritatis esse voluptates nobis recusandae magni. Voluptas, facere officiis? Perferendis nesciunt earum rem reiciendis, mollitia itaque, fugiat tenetur, harum consequatur eos quas perspiciatis quibusdam ducimus sed molestiae fuga explicabo officiis. Praesentium, molestias voluptatum? Recusandae eum exercitationem animi sit ipsa, optio dolorem rem cupiditate. Eos, omnis! Tenetur earum sapiente unde obcaecati corporis nostrum eligendi sint quasi, molestias facilis. Provident rerum ipsam magnam necessitatibus error corrupti reprehenderit itaque perferendis sequi exercitationem possimus aliquam, voluptatem consectetur saepe, voluptates a at odit, odio nemo tenetur id consequuntur quia. Nam, tempora sit, reiciendis, iste mollitia rem fugit natus earum ducimus ipsum eligendi omnis reprehenderit praesentium voluptate in aut facere unde provident quaerat debitis at laboriosam ab! Accusantium, ut! Cum a tempora debitis autem alias mollitia, saepe est quo pariatur excepturi optio, voluptas, quia eius molestiae sint quae earum soluta veniam ducimus nobis ullam corporis tempore quibusdam. Fugit, voluptatem odit excepturi nulla doloribus nisi, deleniti blanditiis, tenetur minima architecto sunt mollitia cum vitae dignissimos natus quia nemo ullam exercitationem quisquam impedit vero? Perspiciatis possimus nobis itaque incidunt, odit quia magnam sed voluptatibus libero rem obcaecati deserunt aut autem. Laborum'; 

  return (
    <>
      <h1 className='underline-effects' style={{position:"relative"}}>Description</h1>
      <ReadMore text={longText} maxLength={400} />
      </>
  );
};

export default Description;
