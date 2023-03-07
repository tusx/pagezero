import json
import random
import re

header = """ <!DOCTYPE html>
<html lang="en" style="background-color: black;">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="" />
    <meta
      name="author"
      content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
    />
    <meta name="generator" content="Hugo 0.88.1" />
    <title>PageZero</title>

    
    <!-- Bootstrap core CSS -->
    <link 
      rel="stylesheet" 
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css" 
      integrity="sha512-GQGU0fMMi238uA+a/bdWJfpUGKUkBdgfFdgBm72SUQ6BeyWjoY/ton0tEjH+OSH9iP4Dfh+7HM0I9f5eR0L/4w==" 
      crossorigin="anonymous" 
      referrerpolicy="no-referrer" 
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <!-- style -->
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <main>
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Page Zero</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Question</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <div class="d-grid gap-2 d-md-block">
              <a class="btn btn-primary" href="#" role="button">Login</a>
              <a class="btn btn-secondary" href="#" role="button"
                >Create Account</a
              >
            </div>
          </div>
        </div>
      </nav>

      <div
        class="py-1 text-center bg-dark"
        style="background-image: url(https://i.imgur.com/J6duFhS.jpeg);background-position: center;"
      >
        <div class="container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="text-white">Page Zero</h1>
                <form class="d-flex" action="https://www.google.com/search">
                  <input class="form-control me-2" type="search" placeholder="Search on Google" aria-label="Search" name="q">
                  <button class="btn btn-success" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
          </div>
        </div>
      </div>

      <div class="album py-5 bg-dark">
        <div class="container">
            <div class="row">
                <div class="col">
                  <div class="card mb-2">
                    <div class="card-body bg-dark text-white">
                      <h5 class="card-title">Quick Links:  </h5>
                      
                      
                    <div class="btn-group mt-1">
                        <a href="https://searx.bar/search" target="_blank" type="button" class="btn btn-primary">Searx</a>
                        <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split border-start" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">About</a></li>
                        <li><a class="dropdown-item" href="#">Report</a></li>
                        </ul>
                    </div>
                      
                    <div class="btn-group mt-1">
                        <a href="https://1337x.to/" target="_blank" type="button" class="btn btn-primary">1337x</a>
                        <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split border-start" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">About</a></li>
                        <li><a class="dropdown-item" href="#">Report</a></li>
                        </ul>
                    </div>
                      
                    </div>
                  </div>
                </div>
              </div> 
<div class="accordion" id="accordionExample">
              
              """

footer = """  
</div>
</div>
    </main>

    <footer class="text-muted py-5 bg-dark">
      <div class="container">
        <p class="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <p class="mb-1">
          Pagezero.xyz 2022
        </p>
        <p class="mb-0">
          This is a curated collection of links and is contantly updated.
        </p>
      </div>
    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.bundle.min.js" integrity="sha512-pax4MlgXjHEPfCwcJLQhigY7+N8rt6bVvWLFyUMuxShv170X53TRzGPmPkZmGBhk+jikR8WBM4yl7A9WMHHqvg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  </body>
</html>
 """

rainbow = ["#1A0E2D","#101E33","#072818","#453A02","#462206","#44110A"]
rainbow2 = ["#4B2882","#2E5793","#177245","#897b31","#C96112","#C1301C"]

def randxx():
  randx = random.randint(0,5)
  return randx


def cap1st(whattocap):
  key = re.sub('([a-zA-Z])', lambda x: x.groups()[0].upper(), whattocap, 1)
  return key

open_json_file = open("data.json")

json_data_get = json.load(open_json_file)



secs = ''


for key in json_data_get['links']:
    for key2 in key:
        # this will be the section titile
        section_title = key2
        cap_title = ""
        cool_title = section_title.split("-")

        for title_g in cool_title:
            cap_title += title_g.capitalize()+" "
            
        all_section = key[key2]
        h4_nd_links = ''
        for sections in all_section:
            one_section = sections
            # print(headings)
            # print('\n')
            for headings in one_section:
                h1 = headings
                cap_h1 = ""
                hed = h1.split("-")
                for hedd in hed:
                    cap_h1 += hedd.capitalize()+" "

                h4_nd_links += "<p class=\"mt-2 mb-0 \">"+ cap_h1 +":</p>"
                links = one_section[headings]
                # print(h1)
                # print('\n')
                for link in links:
                    link_title = cap1st(link)
                    link_href = links[link]
                    randnum = randxx()
                    h4_nd_links += """
                    <div class="btn-group mt-1">
                          <a 
                            href="http://"""+ link_href +"""\" 
                            target="_blank" type="button" 
                            class="btn text-white" 
                            style=" background-color: """+ rainbow2[randnum] +""" !important; ">
                            """+ link_title +"""
                          </a>
                          <button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split border-start" data-bs-toggle="dropdown" aria-expanded="true">
                          <span class="visually-hidden">Toggle Dropdown</span>
                          </button>
                          <ul class="dropdown-menu">
                          <li><a class="dropdown-item">N/A</a></li>
                          
                          </ul>
                      </div>
                    
                    """

                # print(h4)
        # print(section_title)
        # print(key[key2])
        randx = randxx()

        div_row = """            
<div class="accordion-item">
    <h2 class="accordion-header" id="head-"""+ section_title +"""\">
      <button class="accordion-button text-white" type="button" data-bs-toggle="collapse" data-bs-target="#c-"""+ section_title +"""\" aria-expanded="true" aria-controls="c-"""+ section_title +"""\" style=" background-color: """+ rainbow[randx] +""" !important; ">
        """+ cap_title +""":
      </button>
    </h2>
    <div id="c-"""+ section_title +"""\" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body bg-dark text-white">
        """+ h4_nd_links +"""
      </div>
    </div>
  </div>
                """
        secs += div_row
        # print(div_row)

    # print(key)
    

html = header+secs+footer
f = open("index.html", "w")
f.write(html)
f.close()
print("html written")