import React from 'react';

interface Props {}

const Features: React.FC<Props> = () => {
  return (
    <>
      <section className="features-head bg-primary py-3">
        <div className="container grid">
          <div>
            <h1 className="xl">Features</h1>
            <p className="lead">
              Check out the features of Loruki that separate us from the
              competition
            </p>
          </div>
          <img src="images/server.png" alt="" />
        </div>
      </section>

      {/* -- Sub head -- */}
      <section className="features-sub-head bg-light py-3">
        <div className="container grid">
          <div>
            <h1 className="md">The Loruki Platform</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              cupiditate dignissimos temporibus perspiciatis quae! Suscipit qui,
              consectetur ea consequatur, doloribus repellendus quasi, aut
              corporis nam alias culpa. Nostrum, inventore accusantium!
            </p>
          </div>
          <img src="images/server2.png" alt="" />
        </div>
      </section>

      <section className="features-main my-2">
        <div className="container grid grid-3">
          <div className="card flex">
            <i className="fas fa-server fa-3x"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              nemo saepe corrupti et dolorem voluptate at, nostrum rem
              voluptatem ab alias quia molestiae ea, libero nihil deserunt.
              Molestias, eum? Necessitatibus!
            </p>
          </div>
          <div className="card flex">
            <i className="fas fa-network-wired fa-3x"></i>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              recusandae perferendis culpa, reiciendis a itaque debitis qui vel
              dignissimos ipsum!
            </p>
          </div>
          <div className="card flex">
            <i className="fas fa-laptop-code fa-3x"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              magnam.
            </p>
          </div>
          <div className="card flex">
            <i className="fas fa-database fa-3x"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, a!
            </p>
          </div>
          <div className="card flex">
            <i className="fas fa-power-off fa-3x"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              magnam.
            </p>
          </div>
          <div className="card flex">
            <i className="fas fa-upload fa-3x"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              magnam.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
