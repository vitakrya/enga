<template>
    <div id="home">
        <h1>Hellow world</h1>
          <Timeline
            :timeline-items="timelineItems"
            :message-when-no-items="messageWhenNoItems"/>
    </div>
</template>

<style lang="scss">
</style>

<script>
    import Timeline from 'timeline-vuejs';

    export default {
        components: {
            Timeline
        },
        data: () => ({
            messageWhenNoItems: 'There are not items',
            timelineItems: [
                {
                    from: new Date(2018, 7),
                    title: 'Name',
                    description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
                },
                {
                    from: new Date(2016, 1),
                    title: 'Name',
                    description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
                },
                {
                    from: new Date(2016, 6),
                    title: 'Name',
                    description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
                },
                {
                    from: new Date(2012, 1),
                    title: 'Name',
                    description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.'
                }
            ]
        })
    }
</script>
