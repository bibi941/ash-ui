<template>
  <div style="padding: 100px">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <ash-sticky >
      <div style="border: 1px solid red">我就是 sticky</div>
    </ash-sticky>
    <p>段落1</p>
    <p>段落2</p>
    <p>段落3</p>
    <p>段落4</p>
    <p>段落5</p>
    <p>段落6</p>
    <p>段落7</p>
    <p>段落8</p>
    <p>段落9</p>
    <p>段落10</p>
    <p>段落11</p>
    <p>段落12</p>
    <p>段落13</p>
    <p>段落14</p>
    <p>段落15</p>
    <p>段落16</p>
    <p>段落17</p>
    <p>段落18</p>
    <p>段落19</p>
    <p>段落20</p>
    <p>段落21</p>
    <p>段落22</p>
    <p>段落23</p>
    <p>段落24</p>
    <p>段落25</p>
    <p>段落26</p>
    <p>段落27</p>
    <p>段落28</p>
    <p>段落29</p>
    <p>段落30</p>
    <p>段落31</p>
    <p>段落32</p>
    <p>段落33</p>
    <p>段落34</p>
    <p>段落35</p>
    <p>段落36</p>
    <p>段落37</p>
    <p>段落38</p>
    <p>段落39</p>
    <p>段落40</p>
    <p>段落41</p>
    <p>段落42</p>
    <p>段落43</p>
    <p>段落44</p>
    <p>段落45</p>
    <p>段落46</p>
    <p>段落47</p>
    <p>段落48</p>
    <p>段落49</p>
    <p>段落50</p>
  </div>
</template>

<script>
  import sticky from './sticky'

  export default {
    name: 'app',
    components: {
      'ash-sticky': sticky

    },
    data() {
      return {}
    },
    methods: {},
    created() {
    }
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

</style>
