<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('home_etcs', function (Blueprint $table) {
            $table->id();
            $table->text('home_title');
            $table->string('home_sub_title');
            $table->text('tech_description');
            $table->string('total_project');
            $table->string('total_course');
            $table->string('total_hour');
            $table->text('video_description');
            $table->string('video_url');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('home_etcs');
    }
};
