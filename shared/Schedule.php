<?php
    class Schedule {
        public $matches;

        public function __construct() {
            $this->matches = [];
        }

        public function addMatch($match) {
            $this->matches[] = $match;
        }

        public function returnMatches() {
            return $this->matches;
        }
    }
?>