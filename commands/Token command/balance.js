const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('balance')
	.setDescription('get balance')
    .addUserOption(option =>
        option
            .setName('user')
            .setDescription("which user")
            .setRequired(true))
    .addStringOption(option =>
        option.setName('category')
        .setDescription('which token')
        .setRequired(true)
        .addChoices(
            { name: 'Hearts', value: 'Hearts' },
            { name: 'Spades', value: 'Spades' },
            { name: 'Clubs', value: 'Clubs' },
            { name: 'Diamonds', value: 'Diamonds' },
            { name: 'Mixiecoin', value: 'Mixiecoin' },
            { name: 'NFTs', value:'NFTs' },
        )),
        async execute(interaction, ) {
            const category = interaction.options.getString('category');
            const target = interaction.options.getUser('user') || interaction.user;
            const heartEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Hearts balance:')
            .setDescription(`Hearts:0`)
            const spadeEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Spade balance')
            .setDescription(`Spades:0`)
            const clubsEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Club balance')
            .setDescription(`Clubs:0`)
            const diamondsEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Diamond balance')
            .setDescription(`Diamonds:0`)
            const nftsEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('NFTs balance')
            .setDescription(`NFTs:0`)
            const mixiecoinsEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Mixiecoins balance')
            .setDescription(`Mixiecoins:0`)
            
            if (category == 'Hearts'){
                interaction.reply({ embeds: [heartEmbed] });}
            else if(category == 'Clubs'){
                interaction.reply({ embeds: [clubsEmbed] });}
            else if(category == 'Diamonds'){
                interaction.reply({ embeds: [diamondsEmbed] });}
            else if(category == 'Spades'){
                interaction.reply({ embeds: [spadeEmbed] });}
            else if(category == 'NFTs'){
                interaction.reply({ embeds: [nftsEmbed] });}
            else if(category == 'Mixiecoin'){
                interaction.reply({ embeds: [mixiecoinsEmbed] });}
        },
    
    }