$(function () {

    the_game = function () {

        if (check_ball_hits_floor(ball1) || check_ball_hits_basket(ball1)) {
            set_ball_to_initial_position(ball1);
        } else {
            ball_down(ball1);
        }

        if (check_ball_hits_floor(ball2) || check_ball_hits_basket(ball2)) {
            set_ball_to_initial_position(ball2);
        } else {
            ball_down(ball2);
        }

        if (check_ball_hits_floor(ball3) || check_ball_hits_basket(ball3)) {
            set_ball_to_initial_position(ball3);
        } else {
            ball_down(ball3);
        }

        if (misses >= 0) {
            anim_id = requestAnimationFrame(the_game);
        } else {
            stop_the_game();
        }
    };

    anim_id = requestAnimationFrame(the_game);

});
