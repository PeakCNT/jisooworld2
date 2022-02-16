import react ,{useState} from "react"
import 'bulma/css/bulma.css'
import '../index.css'

const Navbar = () => {
  const [hide,setHide] = useState(true)
    return (
      <nav class="navbar is-pink" role="navigation" aria-label="main navigation" style={{'display':'flex','flexDirection':'row', 'justifyContent':'center'}}>
        <div class="navbar-brand" style={{'marginRight':'300px'}}>
            <h1 class="is-size-2">JisooWorld</h1>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
        </div>
          <div class="navbar" style={{'background':'pink'}}>
            <div class="navbar-item">
              <a>
              Home
              </a>
            </div>

            <div class="navbar-item">
              <a>
              Documentation
              </a>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider"></hr>
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>
      </nav>
    )
}

export default Navbar