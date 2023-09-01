"use client";

export function Body() {
  return (
    <>
      <div className="grid grid-cols-8">
        <div className="col-start-2 col-end-5">
          <h1>Powering E-Commerce with Ocomni</h1>
          <p>
            Streamlined, affordable, easy to use sites for ecommerce purposes
          </p>
          <div className="">
            <p className="mt-8">
              <span className="border-2 rounded-md p-2 hover:cursor-pointer hover:bg-slate-200">
                Learn More
              </span>
            </p>
          </div>
        </div>
        <div className="col-start-5 col-end-8">
          <div className="img-container">
            <div className="img-behind-wrapper">
              <img
                className="img-behind"
                src="https://res.cloudinary.com/daf0osydi/image/upload/v1693517355/reshoot-flowers_ieo6zt.png"
                alt="ocomni project storefront"
              />
            </div>
            <div className="img-front-wrapper">
              <img
                className="img-front"
                src="https://res.cloudinary.com/daf0osydi/image/upload/v1693514835/ocomni-lp-img_vcs14g.png"
                alt="ocomni dashboard for ecommerce clients"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
