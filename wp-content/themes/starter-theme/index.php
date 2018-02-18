<?php get_header();
	
	// come back here and wrap this in generic templating	
	if ( have_posts() ) : while ( have_posts() ) : the_post();

get_footer();