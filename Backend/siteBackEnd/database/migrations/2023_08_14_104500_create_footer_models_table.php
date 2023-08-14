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
        Schema::create('footer_models', function (Blueprint $table) {
            $table->id();
            $table->text('address');
            $table->string('email');
            $table->string('phpne');
            $table->string('facebook');
            $table->string('instagram');
            $table->string('github');
            $table->string('footer_credit');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('footer_models');
    }
};
