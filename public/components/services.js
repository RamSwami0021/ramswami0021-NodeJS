class Services extends HTMLElement {
    connectedCallback() {
        this.innerHTML=`
        <div class="container">

				<!-- section title -->
				<h2 class="section-title wow fadeInUp">Skills & Certificates</h2>

				<div class="spacer" data-height="60"></div>

				<div class="row">

					<div class="col-md-12">
						<div class="row">
							<div class="col-md-6 col-lg-6 mb-5">
								<!-- skill item -->
								<div class="skill-item">
									<div class="skill-info clearfix">
										<h4 class="float-left mb-3 mt-0">HTML/CSS/BootStrap</h4>
										<span class="float-right">90%</span>
									</div>
									<div class="progress">
										<div class="progress-bar data-background" role="progressbar" aria-valuemin="0"
											aria-valuemax="100" aria-valuenow="95" data-color="#FFD15C">
										</div>
									</div>
									<div class="spacer" data-height="20"></div>
								</div>

								<!-- skill item -->
								<div class="skill-item">
									<div class="skill-info clearfix">
										<h4 class="float-left mb-3 mt-0">JavaScript</h4>
										<span class="float-right">50%</span>
									</div>
									<div class="progress">
										<div class="progress-bar data-background" role="progressbar" aria-valuemin="0"
											aria-valuemax="100" aria-valuenow="65" data-color="#FF4C60">
										</div>
									</div>
									<div class="spacer" data-height="20"></div>
								</div>

								<!-- skill item -->
								<div class="skill-item">
									<div class="skill-info clearfix">
										<h4 class="float-left mb-3 mt-0">Node JS</h4>
										<span class="float-right">70%</span>
									</div>
									<div class="progress">
										<div class="progress-bar data-background" role="progressbar" aria-valuemin="0"
											aria-valuemax="100" aria-valuenow="70" data-color="#6C6CE5">
										</div>
									</div>
								</div>
								<!-- skill item -->
								<div class="skill-item">
									<div class="skill-info clearfix">
										<h4 class="float-left mb-3 mt-3">WordPress</h4>
										<span class="float-right mt-3">85%</span>
									</div>
									<div class="progress">
										<div class="progress-bar data-background" role="progressbar" aria-valuemin="0"
											aria-valuemax="100" aria-valuenow="85" data-color="#FF4C60">
										</div>
									</div>
								</div>
								<!-- skill item -->
								<div class="skill-item">
									<div class="skill-info clearfix">
										<h4 class="float-left mb-3 mt-3">C++/C</h4>
										<span class="float-right mt-3">78%</span>
									</div>
									<div class="progress">
										<div class="progress-bar data-background" role="progressbar" aria-valuemin="0"
											aria-valuemax="100" aria-valuenow="78" data-color="#FFD15C">
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-lg-6 mb-5">
								<!-- skill item -->
								<div class="skill-item">
									<div class="skill-info clearfix">
										<h4 class="float-left mb-3 mt-0">Amazon Web Services (AWS)</h4>
										<span class="float-right">85%</span>
									</div>
									<div class="progress">
										<div class="progress-bar data-background" role="progressbar" aria-valuemin="0"
											aria-valuemax="100" aria-valuenow="85" data-color="#FFD15C">
										</div>
									</div>
									<div class="spacer" data-height="20"></div>
								</div>

								<!-- skill item -->
								<div class="skill-item">
									<div class="skill-info clearfix">
										<h4 class="float-left mb-3 mt-0">Microsoft Azure / Google Cloud Platform</h4>
										<span class="float-right">65%</span>
									</div>
									<div class="progress">
										<div class="progress-bar data-background" role="progressbar" aria-valuemin="0"
											aria-valuemax="100" aria-valuenow="65" data-color="#FF4C60">
										</div>
									</div>
									<div class="spacer" data-height="20"></div>
								</div>

								<!-- skill item -->
								<div class="skill-item">
									<div class="skill-info clearfix">
										<h4 class="float-left mb-3 mt-0">Docker, Kubernetes, Ansible, Jenkins(Basics)
										</h4>
										<span class="float-right">40%</span>
									</div>
									<div class="progress">
										<div class="progress-bar data-background" role="progressbar" aria-valuemin="0"
											aria-valuemax="100" aria-valuenow="40" data-color="#6C6CE5">
										</div>
									</div>
								</div>

								<!-- skill item -->
								<div class="skill-item">
									<div class="skill-info clearfix">
										<h4 class="float-left mb-3 mt-3">Cisco Packet Tracer (Network Design)</h4>
										<span class="float-right mt-3">75%</span>
									</div>
									<div class="progress">
										<div class="progress-bar data-background" role="progressbar" aria-valuemin="0"
											aria-valuemax="100" aria-valuenow="75" data-color="#FF4C60">
										</div>
									</div>
								</div>
								<!-- skill item -->
								<div class="skill-item">
									<div class="skill-info clearfix">
										<h4 class="float-left mb-3 mt-3">Python</h4>
										<span class="float-right mt-3">80%</span>
									</div>
									<div class="progress">
										<div class="progress-bar data-background" role="progressbar" aria-valuemin="0"
											aria-valuemax="100" aria-valuenow="80" data-color="#FFD15C">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-md-4">
						<!-- service box -->
						<div class="service-box rounded data-background padding-30 text-center text-light shadow-blue"
							data-color="#6C6CE5">
							<h3 class="mb-3 mt-0">JU Hackathon</h3>
							<p class="mb-0">Developed a Website and WebApplication using HTML, CSS, Javascript, and
								flask.</p>
							<div class="mt-3">
								<a href="/doc/Ju-hackhthon.pdf" target="_blank" class="btn btn-default">View
									Certificate</a>
							</div>
						</div>
						<div class="spacer d-md-none d-lg-none" data-height="30"></div>
					</div>

					<div class="col-md-4">
					</div>

					<div class="col-md-4">
						<!-- service box -->
						<div class="service-box rounded data-background padding-30 text-center shadow-yellow"
							data-color="#F9D74C">
							<h3 class="mb-3 mt-0">Cyber Security</h3>
							<p class="mb-0">Cyber Security Foundation professional certificate based on CyBok.</p>
							<div class="mt-3">
								<a href="/doc/Certificate-Ram.pdf" target="_blank" class="btn btn-default">View
									Certificate</a>
							</div>
						</div>
						<div class="spacer d-md-none d-lg-none" data-height="30"></div>
					</div>

				</div>

				<div class="mt-5 text-center">
					<p class="mb-0">Looking for a custom job? <a href="#contact">Click here</a> to contact me! 👋</p>
				</div>

			</div>
        `
    }
};

customElements.define('app-services', Services);