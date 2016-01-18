<template>
    <li>
        <div>
            <a :href="record.html_url" target="_blank" class="commit">
                {{record.sha.slice(0, 7)}}
            </a>
            - <span class="message">{{record.commit.message | truncate}}</span>
        </div>
        <div>
            by <span class="author">{{record.commit.author.name}}</span>
            at <span class="date">{{record.commit.author.date | formatDate }}</span>
        </div>
    </li>
</template>

<script>
export default {
    props: ['record'],
    filters: {
        truncate: function (v) {
          var newline = v.indexOf('\n')
          return newline > 0 ? v.slice(0, newline) : v
        },
        formatDate: function (v) {
          return v.replace(/T|Z/g, ' ')
        }
    }
}
</script>
