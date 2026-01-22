import './TeamBackgroundImage.css';

const imgWkC7AP1 = "https://www.figma.com/api/mcp/asset/054df4cf-ce71-49e2-b8e7-6cc47396df5e";
const imgWkC7AP = "https://www.figma.com/api/mcp/asset/ddc1b181-39e0-43e0-a991-778d4960594f";

function TeamBackgroundImage() {
  return (
    <div className="team-bg-wrapper">
      <div className="team-bg-layer">
        <div className="team-bg-clip">
          <div className="team-bg-group">
            <div className="team-bg-masked" style={{ maskImage: `url('${imgWkC7AP}')` }}>
              <div className="team-bg-image-container">
                <img alt="Team collaboration" className="team-bg-image" src={imgWkC7AP1} />
              </div>
            </div>
            <div 
              className="team-bg-gradient" 
              style={{ 
                backgroundImage: "linear-gradient(112.55deg, rgba(31, 54, 56, 1) 9.37%, rgba(0, 175, 103, 0) 40.17%)",
                maskImage: `url('${imgWkC7AP}')`
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamBackgroundImage;
