$(document).on('mousemove', function (e) {
    basket.css('left', e.pageX);
});

function ball_down(ball) {
    ball_current_position = parseInt(ball.css('top'));
    ball.css('top', ball_current_position + speed);
}

function check_ball_hits_floor(ball) {
    if (collision(ball, floor)) {
        increment_misses();
        return true;
    }
    return false;
}

function set_ball_to_initial_position(ball) {
    ball.css('top', ball_initial_position);
}


function increment_misses() {
    misses++;
}

function check_ball_hits_basket(ball) {
    if (collision(ball, basket)) {
        ball_top = parseInt(ball.css('top'));
        if (ball_top < basket_top) {
            update_score();
            return true;
        }
    }
    return false;
}

function update_score() {
    score++;
    if (score % 10 === 0 && speed <= max_speed) {
        speed++;
    }
}

function stop_the_game() {
    cancelAnimationFrame(anim_id);
    restart.slideDown();
}

restart.click(function () {
    location.reload();
});


stop.click(function () {
    cancelAnimationFrame(anim_id);
    score_span.text(parseInt(score * 100 / (score + misses)));
});

start.click(function () {
    location.reload();
});
