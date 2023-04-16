class Expereince extends HTMLElement {
    connectedCallback() {
        this.innerHTML=`
        <div class="container">

				<!-- section title -->
				<h2 class="section-title wow fadeInUp">Experience & Education</h2>

				<div class="spacer" data-height="60"></div>

				<div class="row">

					<div class="col-md-6">

						<!-- timeline wrapper -->
						<div class="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">

							<!-- timeline item -->
							<div class="timeline-container wow fadeInUp">
								<div class="content">
									<span class="time">Jan 2022 - July 2022</span>
									<h3 class="title">Full Stack Developer</h3>
									<h6>Metapercept Technology Services LLP</h6>
									<p>
										● Developing Website And WebApplication. <br>
										● Work on Client Based Project. <br>
										Skills: Node.js · Vue.js · MongoDB
									</p>
									<div class="mt-3">
										<a href="/doc/ram_metapercept_Experience_letter.jpg" target="_blank"
											class="btn btn-default">View Certificate</a>
									</div>
								</div>
							</div>

							<!-- timeline item -->
							<div class="timeline-container wow fadeInUp" data-wow-delay="0.2s">
								<div class="content">
									<span class="time">Aug 2022 - Jan 2023</span>
									<h3 class="title">DigiMarking Infotech Private Limted</h3>
									<p>
										● Work as a freelancer <br>
										● Developing Website using WordPress <br>
										Skills: WordPress
									</p>
									<div class="mt-3">
										<a href="#" target="_blank" class="btn btn-default">View Certificate</a>
									</div>
								</div>
							</div>

							<!-- main line -->
							<span class="line"></span>

						</div>

					</div>

					<div class="col-md-6">

						<!-- responsive spacer -->
						<div class="spacer d-md-none d-lg-none" data-height="30"></div>

						<!-- timeline wrapper -->
						<div class="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">

							<!-- timeline item -->
							<div class="timeline-container wow fadeInUp">
								<div class="content">
									<span class="time">2022 - Present</span>
									<h3 class="title">Masters in Computer Applications</h3>
									<h6>JECRC University, Jaipur</h6>
									<p>Specialization in Cloud Computing Using (Microsoft Azure)</p>
								</div>
							</div>

							<!-- timeline item -->
							<div class="timeline-container wow fadeInUp">
								<div class="content">
									<span class="time">2019 - 2022</span>
									<h3 class="title">Bachelor in Computer Applications</h3>
									<h6>PDUSU University, Sikar</h6>
									<p>Learn C++/C, HTML/CSS, bootstrap, JavaScript and GitHub.</p>
								</div>
							</div>

							<!-- timeline item -->
							<div class="timeline-container wow fadeInUp" data-wow-delay="0.4s">
								<div class="content">
									<span class="time">2017 - 2019</span>
									<h3 class="title">Senior Secondary School</h3>
									<h6>Impulse Career Institute, Sikar</h6>
									<p>Physics, Chemistry and Biology.</p>
								</div>
							</div>

							<!-- main line -->
							<span class="line"></span>

						</div>

					</div>

				</div>

			</div>
        `
    }
};

customElements.define('app-expereince', Expereince);