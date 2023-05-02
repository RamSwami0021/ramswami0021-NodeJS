class ContactUs extends HTMLElement{
        connectedCallback() {
            this.innerHTML = `
			<div class="container">

				<!-- section title -->
				<h2 class="section-title wow fadeInUp">Get In Touch</h2>

				<div class="spacer" data-height="60"></div>

				<div class="row">

					<div class="col-md-4">
						<!-- contact info -->
						<div class="contact-info">
							<h3 class="wow fadeInUp">Let's talk about everything!</h3>
							<p class="wow fadeInUp">Don't like forms? Send me an <a
									href="mailto:ramswami0021@gmail.com">email</a>. 👋</p>
							<a href="login.html" target="_blank">
								<button name="login" type="login" value="login" id="login" class="btn btn-default">
									Login Here (only DEMO Dashboard)</button> </a>
						</div>
					</div>

					<div class="col-md-8">
						<!-- Contact Form -->
						<form id="contact-form" class="contact-form mt-6" method="post" action="/contact_form">

							<div class="messages"></div>

							<div class="row">
								<div class="column col-md-6">
									<!-- Name input -->
									<div class="form-group">
										<input type="text" class="form-control" name="name" id="name"
											placeholder="Your name" required="required" data-error="Name is required.">
										<div class="help-block with-errors"></div>
									</div>
								</div>

								<div class="column col-md-6">
									<!-- Email input -->
									<div class="form-group">
										<input type="email" class="form-control" id="email" name="email"
											placeholder="Email address" required="required"
											data-error="Email is required.">
										<div class="help-block with-errors"></div>
									</div>
								</div>

								<div class="column col-md-12">
									<!-- Email input -->
									<div class="form-group">
										<input type="text" class="form-control" id="subject" name="subject"
											placeholder="Subject" required="required" data-error="Subject is required.">
										<div class="help-block with-errors"></div>
									</div>
								</div>

								<div class="column col-md-12">
									<!-- Message textarea -->
									<div class="form-group">
										<textarea name="message" id="message" class="form-control" rows="5"
											placeholder="message" required="required"
											data-error="Message is required."></textarea>
										<div class="help-block with-errors"></div>
									</div>
								</div>
							</div>
							<button name="submit" type="submit" value="Submit" id="submit" class="btn btn-default"
								onclick="thankYouMsg()">Send Message</button><!-- Send Button -->

						</form>
						<!-- Contact Form end -->
					</div>

				</div>

			</div>
            `
        }
};
customElements.define('app-contact-us', ContactUs);